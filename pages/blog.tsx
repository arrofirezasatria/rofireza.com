import React from "react";
import ContainerHero from "components/ContainerHero";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const BlogPost = () => {
    const theme = useTheme();
    return (
        <Link href="/">
            <a>
                <Box>
                    <Stack
                        direction={{ md: "row", xs: "column" }}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: { md: "center", xs: "flex-start" },
                        }}
                    >
                        <Typography variant="h6" gutterBottom={true} sx={{}}>
                            Rust Is The Future of JavaScript Infrastructure
                        </Typography>
                        <Typography
                            sx={{
                                marginBottom: { md: "0px", xs: "12px" },
                                color: theme.palette.text.secondary,
                            }}
                        >
                            224,120 views
                        </Typography>
                    </Stack>
                    <Typography
                        sx={{
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Why is Rust being used to replace parts of the
                        JavaScript web ecosystem like minification (Terser),
                        transpilation (Babel), formatting (Prettier), bundling
                        (webpack), linting (ESLint), and more? Rust Is The
                        Future of JavaScript Infrastructure
                    </Typography>
                </Box>
            </a>
        </Link>
    );
};

export default function blog({ posts }) {
    const theme = useTheme();
    return (
        <ContainerHero variantContainer="blog">
            <Typography
                gutterBottom={true}
                component="h1"
                variant="h3"
                sx={{ fontWeight: "Bold" }}
            >
                Blog
            </Typography>
            <Typography
                sx={{
                    color: theme.palette.text.secondary,
                }}
            >
                Why is Rust being used to replace parts of the JavaScript web
                ecosystem like minification (Terser), transpilation (Babel),
                formatting (Prettier), bundling (webpack), linting (ESLint), and
                more? Rust Is The Future of JavaScript Infrastructure
            </Typography>
            <TextField
                label="Search Articles"
                margin="dense"
                fullWidth
                size="small"
                sx={{
                    my: 1,
                    "& .MuiInputBase-input": {
                        borderRadius: "10px",
                        paddingBottom: "11px",
                    },
                }}
            />

            <Typography
                component="h2"
                variant="h3"
                sx={{ fontWeight: "bold", marginTop: 3 }}
            >
                Recent Post
            </Typography>
            <Stack spacing={3} sx={{ marginTop: "20px" }}>
                <BlogPost />
                <BlogPost />
            </Stack>
            <Typography
                component="h2"
                variant="h3"
                sx={{ fontWeight: "bold", marginTop: "40px" }}
            >
                Most Popular
            </Typography>
            <Stack spacing={3.25} sx={{ marginTop: "20px" }}>
                <BlogPost />
                <BlogPost />
            </Stack>
        </ContainerHero>
    );
}

async function getStaticProps() {
    const posts = { name: "ada" };

    return {
        props: { posts },
    };
}
