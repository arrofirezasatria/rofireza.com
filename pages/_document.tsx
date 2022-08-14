import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Box from "@mui/material/Box";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box component="body">
        <Main />
        <Script strategy="beforeInteractive" src="/prism.js" />
      </Box>
    </Html>
  );
}
