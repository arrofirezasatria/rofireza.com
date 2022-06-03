import "styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { CodeCopyProvider } from "../modules/CodeCopy";
import { SessionProvider } from "next-auth/react";
import ThemeContext from "../modules/ThemeContext";
import store from "../redux/store";
import "../styles/prismokaida.css";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ThemeContext>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeContext>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
