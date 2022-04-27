import "styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const [mode, setMode] = React.useState("light");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                typography: {
                    fontFamily: [
                        "Rubik",
                        "Sans-serif",
                        "-apple-system",
                        "BlinkMacSystemFont",
                        '"Segoe UI"',
                        "Roboto",
                        '"Helvetica Neue"',
                        "Arial",
                        "sans-serif",
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                    ].join(","),
                },
            }),
        [mode]
    );

    return (
        <SessionProvider session={session}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </SessionProvider>
    );
}

export default MyApp;
