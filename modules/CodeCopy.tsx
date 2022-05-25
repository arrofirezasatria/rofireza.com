import * as React from "react";
import { useRouter } from "next/router";

const CodeBlockContext = React.createContext<
  React.MutableRefObject<HTMLDivElement | null>
>({
  current: null,
});

/**
 * How to use: spread the handlers to the .MuiCode-root
 *
 * The html structure should be:
 * <div className="MuiCode-root">
 *  <pre>...</pre>
 *  <button className="MuiCode-copy">...</button>
 * </div>
 */
export const useCodeCopy = () => {
  const rootNode = React.useContext(CodeBlockContext);
  return {
    onMouseEnter: (event: React.MouseEvent) => {
      rootNode.current = event.currentTarget as HTMLDivElement;
    },
    onMouseLeave: (event: React.MouseEvent) => {
      if (rootNode.current === event.currentTarget) {
        (
          rootNode.current.querySelector(
            ".MuiCode-copy"
          ) as null | HTMLButtonElement
        )?.blur();
        rootNode.current = null;
      }
    },
    onFocus: (event: React.MouseEvent) => {
      rootNode.current = event.currentTarget as HTMLDivElement;
    },
    onBlur: (event: React.FocusEvent) => {
      if (rootNode.current === event.currentTarget) {
        rootNode.current = null;
      }
    },
  };
};

const InitCodeCopy = () => {
  const rootNode = React.useContext(CodeBlockContext);
  const router = useRouter();
  React.useEffect(() => {
    let key = "Ctrl";
    if (typeof window !== "undefined") {
      const macOS = window.navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      if (macOS) {
        key = "⌘";
      }
    }
    const codeRoots = document.getElementsByClassName(
      "MuiCode-root"
    ) as HTMLCollectionOf<HTMLDivElement>;

    if (codeRoots !== null) {
      Array.from(codeRoots).forEach((elm) => {
        elm.addEventListener("mouseenter", () => {
          rootNode.current = elm;
        });
        elm.addEventListener("mouseleave", () => {
          if (rootNode.current === elm) {
            (
              rootNode.current.querySelector(
                ".MuiCode-copy"
              ) as null | HTMLButtonElement
            )?.blur();
            rootNode.current = null;
          }
        });
        elm.addEventListener("focusin", () => {
          // use `focusin` because it bubbles from the copy button
          rootNode.current = elm;
        });
        elm.addEventListener("focusout", () => {
          // use `focusout` because it bubbles from the copy button
          if (rootNode.current === elm) {
            rootNode.current = null;
          }
        });
        const btn = elm.querySelector(
          ".MuiCode-copy"
        ) as HTMLButtonElement | null;
        if (btn) {
          const keyNode = btn.childNodes[1]?.childNodes[1];
          keyNode.textContent =
            keyNode?.textContent?.replace("$key", key) || null;
          btn.addEventListener("click", async function handleClick(event) {
            const trigger = event.currentTarget as HTMLButtonElement;
            const pre = (event.currentTarget as Element)
              ?.previousElementSibling as Element;
            const textNode = trigger.childNodes[0];
            textNode.nodeValue =
              textNode.textContent?.replace("Copy", "Copied") || null;
            trigger.dataset.copied = "true";
            setTimeout(() => {
              if (trigger) {
                textNode.nodeValue =
                  textNode.textContent?.replace("Copied", "Copy") || null;
                delete trigger.dataset.copied;
              }
            }, 2000);
            try {
              if (pre.textContent) {
                await copy(pre.textContent);
              }
              // eslint-disable-next-line no-empty
            } catch (error) {}
          });
        }
      });
    }
  }, [rootNode, router.pathname]);
  return null;
};

interface CodeCopyProviderProps {
  children: React.ReactNode;
}

/**
 * Place <CodeCopyProvider> at the page level. It will check the keydown event and try to initiate copy click if rootNode exist.
 * Any code block inside the tree can set the rootNode when mouse enter to leverage keyboard copy.
 */
export const CodeCopyProvider = ({ children }: CodeCopyProviderProps) => {
  const rootNode = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (document.getSelection()?.toString()) {
        // Skip if user is highlighting a text.
        return;
      }
      // event.key === 'c' is not enough as alt+c can lead to ©, ç, or other characters on macOS.
      // event.code === 'KeyC' is not enough as event.code assume a QWERTY keyboard layout which would
      // be wrong with a Dvorak keyboard (as if pressing J).
      const isModifierKeyPressed =
        event.ctrlKey || event.metaKey || event.altKey;
      if (String.fromCharCode(event.keyCode) !== "C" || !isModifierKeyPressed) {
        return;
      }
      if (!rootNode.current) {
        return;
      }
      const copyBtn = rootNode.current.querySelector(
        ".MuiCode-copy"
      ) as HTMLButtonElement | null;
      if (!copyBtn) {
        return;
      }
      const initialEventAction = copyBtn.getAttribute("data-ga-event-action");
      // update the 'data-ga-event-action' on the button to track keyboard interaction
      copyBtn.dataset.gaEventAction =
        initialEventAction?.replace("click", "keyboard") || "copy-keyboard";
      copyBtn.click(); // let the GA setup in GoogleAnalytics.js do the job
      copyBtn.dataset.gaEventAction = initialEventAction!; // reset the 'data-ga-event-action' back to initial
    });
  }, []);
  return (
    <CodeBlockContext.Provider value={rootNode}>
      <InitCodeCopy />
      {children}
    </CodeBlockContext.Provider>
  );
};
