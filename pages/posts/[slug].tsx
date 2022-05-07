import React, { useEffect } from "react";
import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import ReactMarkdown from "markdown-to-jsx";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { fontSize } from "@mui/system";
import { useMDXComponent } from "next-contentlayer/hooks";
import defaultTheme from "@mui/material/styles/defaultTheme";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { alpha, styled } from "@mui/material/styles";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "@mui/material/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Prism from "Prismjs";

import Image from "next/image";

import ContainerHero from "components/ContainerHero";
import { Box, Stack, Avatar, Divider } from "@mui/material";
import ImageMDX from "components/mdxcomponents/ImageMDX";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { MDXProvider } from "@mdx-js/react";

export async function getStaticPaths() {
    const paths: string[] = allPosts.map((post) => post.url);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post: Post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );
    return {
        props: {
            post,
        },
    };
}

const ImageComponent = ({ props }) => {
    return <Image {...props} />;
};

const ImageBox = ({ props }) => {
    const { sx, src, ...rest } = props;

    return (
        <Box sx={sx}>
            <Image src={src} {...rest} />
        </Box>
    );
};

const TypographyH1 = styled((props) => (
    <Typography gutterBottom={true} {...props} />
))(({ theme }) => ({}));
const TypographyH2 = styled((props) => (
    <Typography variant="h5" gutterBottom={true} {...props} />
))(({ theme }) => ({}));
const TypographyH3 = styled((props) => (
    <Typography variant="subtitle1" gutterBottom={true} {...props} />
))(({ theme }) => ({}));
const TypographyH4 = styled((props) => (
    <Typography
        gutterBottom={true}
        variant="caption"
        paragraph={true}
        {...props}
    />
))(({ theme }) => ({}));

const ParagraphMDX = styled((props) => <Typography component="p" {...props} />)(
    ({ theme }) => ({
        my: "20px",
        color: theme.palette.text.secondary,
        "& > a ": {
            fontWeight: 600,
            "&:hover": {
                color: "#5090D3",
                transitionProperty: "all",
                transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                transitionDuration: ".2s",
            },
        },
    })
);

const BlockquoteMDX = (props) => (
    <Typography
        component="blockquote"
        color="blockquote"
        sx={{
            color: "white",
            paddingLeft: "16px",
            fontStyle: "italic",
            borderLeftWidth: "0.25rem",
            "& > p": {
                fontWeight: 600,
            },
        }}
        {...props}
    />
);
const LiMDX = (props) => (
    <Box
        component="li"
        sx={{ mt: 1, typography: "body1", color: "text.secondary" }}
        {...props}
    />
);

const CodeTagg = styled("code")(({ theme }) => ({
    direction: "ltr",
    display: "inline-block",
    fontWeight: 400,
    WebkitFontSmoothing: "subpixel-antialiased",
    padding: "0 5px",
    borderRadius: 5,
}));

const PreTagg = styled("pre")(({ theme }) => ({
    margin: theme.spacing(2, "auto"),
    padding: theme.spacing(2),
    backgroundColor: "inherit",
    colorScheme: "dark",
    direction: "ltr",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid",
    borderColor: "inherit",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    maxWidth: "calc(100vw - 32px)",
    [theme.breakpoints.up("md")]: {
        maxWidth: "calc(100vw - 32px - 16px)",
    },
}));

const PreMDX = ({ children }) => {
    console.log(children);
    return (
        <pre>
            {children}
            <CopyToClipboard text={"copyy"}>
                <Button>asd</Button>
            </CopyToClipboard>
        </pre>
    );
};

const mdxComponents = {
    h1: (props) => <TypographyH1 {...props} />,
    h2: (props) => <TypographyH2 {...props} />,
    h3: (props) => <TypographyH3 {...props} />,
    h4: (props) => <TypographyH4 {...props} />,
    p: (props) => <ParagraphMDX {...props} />,
    ImageMDX: (props) => (
        <ImageMDX layout={"intrinsic"} width={720} height={405} {...props} />
    ),
    blockquote: (props) => <BlockquoteMDX {...props} />,
    li: (props) => <LiMDX {...props} />,
    pre: (props) => <PreMDX {...props} />,
};

const PostLayout = ({ post }: { post: Post }) => {
    const Component = useMDXComponent(post.body.code);
    console.log(post);
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <ContainerHero variantContainer="blog">
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className="max-w-xl mx-auto py-8">
                <Box sx={{ mb: 1 }}>
                    <Typography component="time" variant="subtitle2">
                        {format(parseISO(post.date), "LLLL d, yyyy")}
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h3"
                        sx={{ fontWeight: "bold" }}
                    >
                        {post.title}
                    </Typography>
                    <Stack
                        sx={{
                            justifyContent: "space-between",
                            pt: {
                                xs: 1,
                                md: 2,
                            },
                            alignItems: "baseline",
                            pb: 1,
                        }}
                        direction="row"
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ alignItems: "inherit" }}
                        >
                            <Avatar
                                sx={{
                                    width: "24px",
                                    height: "24px",
                                }}
                            >
                                A
                            </Avatar>
                            <Typography
                                component="h4"
                                variant="subtitle1"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                }}
                            >
                                Arrofi Reza Satria
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Typography
                                component="p"
                                variant="subtitle1"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                }}
                            >
                                10 min read
                            </Typography>
                            <Divider
                                orientation="vertical"
                                flexItem
                                variant="middle"
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                }}
                            >
                                213 views
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Component components={mdxComponents} />
            </article>
        </ContainerHero>
    );
};

export default PostLayout;
