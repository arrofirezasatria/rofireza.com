import React from "react";
import Head from "next/head";
import AppBarHero from "./AppBar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { useRouter } from "next/router";

export default function ContainerHero({
    variantContainer = "nonBlog",
    children,
}) {
    const router = useRouter();
    // console.log(router);

    // console.log("asdasdad");
    return (
        <div>
            <Head>
                <title>{"Arrofi Reza - Developer"}</title>
                <meta name="robots" content="follow, index" />
                <meta
                    content={"Arrofi Reza S. - Developer, Blogger, Teacher"}
                    name="description"
                />
                {/* 
        <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
            </Head>
            <AppBarHero />
            {/*      <Container component="main" maxWidth="md" sx={{ paddingTop: 8 }}>
        {children}
      </Container> */}
            {variantContainer === "nonBlog" && (
                <Container
                    component="main"
                    maxWidth="md"
                    sx={{
                        paddingTop: 8,
                        px: {
                            md: "90px !important",
                        },
                    }}
                >
                    {children}
                </Container>
            )}
            {variantContainer === "blog" && (
                <Container
                    component="main"
                    maxWidth="md"
                    sx={{
                        paddingTop: { xs: 1, md: 4 },
                        paddingBottom: { xs: 1, md: 2 },
                        px: {
                            xs: "20px !important",
                            md: "90px !important",
                        },
                    }}
                >
                    {children}
                </Container>
            )}
            {variantContainer === "project" && (
                <Container
                    component="main"
                    maxWidth="md"
                    sx={{ paddingTop: 6 }}
                >
                    {children}
                </Container>
            )}
            <Footer />
        </div>
    );
}
