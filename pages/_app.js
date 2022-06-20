import "styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { SessionProvider } from "next-auth/react";
import ThemeContext from "../modules/ThemeContext";

import "../styles/prismokaida.css";
import "../styles/prism.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <ThemeContext>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeContext>
        </SessionProvider>
    );
}

export default MyApp;
