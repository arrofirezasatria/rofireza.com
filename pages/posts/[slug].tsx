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
import { useTheme, alpha, styled } from "@mui/material/styles";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "@mui/material/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Prism from "Prismjs";
import { blueDark, blue } from "modules/ThemeContext";
import Image from "next/image";

import CreateIcon from "@mui/icons-material/Create";
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

const TypographyH1 = styled((props) => (
    <Typography gutterBottom={true} component="h3" {...props} />
))(({ theme }) => ({
    ...theme.typography.h3,
    fontSize: theme.typography.pxToRem(36),
    fontFamily: "Rubik, Sans-serif",
    margin: "10px 0",
    color:
        theme.palette.mode === "dark" ? theme.palette.grey[50] : blueDark[900],
    fontWeight: 800,
}));
const TypographyH2 = styled((props) => (
    <Typography
        variant="h5"
        gutterBottom={true}
        {...props}
        sx={{ mt: "20px", fontWeight: 500 }}
    />
))(({ theme }) => ({
    ...theme.typography.h5,
    fontFamily: "Rubik, Sans-serif",
    fontWeight: 700,
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey[100]
            : theme.palette.grey[800],
    margin: "40px 0 4px",
}));
const TypographyH3 = styled((props) => (
    <Typography gutterBottom={true} {...props} />
))(({ theme }) => ({
    ...theme.typography.h6,
    fontFamily: "Rubik, Sans-serif",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
    margin: "24px 0 8px",
}));
const TypographyH4 = styled((props) => (
    <Typography
        gutterBottom={true}
        variant="caption"
        paragraph={true}
        {...props}
    />
))(({ theme }) => ({
    ...theme.typography.subtitle1,
    fontFamily: "Rubik, Sans-serif",

    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey[300]
            : theme.palette.grey[800],
    margin: "24px 0 8px",
}));

const AlinkMDX = styled((props) => (
    <Typography component="a" {...props} sx={{ color: "blue" }} />
))(({ theme }) => ({
    color: theme.palette.mode === "dark" ? blue[400] : blue[700],
    fontWeight: 600,
    "&:hover": {
        color: theme.palette.mode === "dark" ? blue[300] : blue[400],
        transitionProperty: "all",
        transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
        transitionDuration: ".2s",
    },
}));

const TableMDX = styled((props) => <table {...props} />)(({ theme }) => ({
    display: "block",
    wordBreak: "normal",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    borderCollapse: "collapse",
    marginBottom: "20px",
    borderSpacing: 0,
    color: "red",
}));

const TdMDX = styled((props) => <Typography component="table" {...props} />)(
    ({ theme }) => ({
        ...theme.typography.body2,
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        color: "red",
    })
);

const ThMDX = styled("th")(({ theme }) => ({
    color: "red",
}));

const ParagraphMDX = styled((props) => <Typography component="p" {...props} />)(
    ({ theme }) => ({
        ...theme.typography.body1,
        wordBreak: "break-word",
        fontFamily: "Rubik",
        marginBottom: "16px",
        marginTop: "16px",
        color:
            theme.palette.mode === "dark"
                ? theme.palette.grey[400]
                : theme.palette.grey[800],
    })
);

const BlockquoteMDXX = styled((props) => (
    <Typography component="blockquote" {...props} />
))(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    border: "1px solid",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.primary[50] ?? "#fff"
            : theme.palette.primary[900] ?? theme.palette.text.primary,
    backgroundColor:
        theme.palette.mode === "dark"
            ? // Support Material Design theme
              alpha(
                  theme.palette.primary[900] ?? theme.palette.primary.dark,
                  0.3
              )
            : alpha(
                  theme.palette.primary[50] ?? theme.palette.primary.dark,
                  0.8
              ),
    borderLeft: "6px solid",
    fontStyle: "italic",
    fontFamily: "Rubik, sans-serif",
    borderColor:
        theme.palette.mode === "dark" // Support Material Design theme
            ? theme.palette.primary[700] ?? theme.palette.primary.dark
            : theme.palette.primary[300] ?? theme.palette.primary.light,
    padding: "10px 20px",
    margin: "20px 0",
    "& p": {
        fontWeight: 400,
        marginBottom: 0,
        marginTop: 0,
        color:
            theme.palette.mode === "dark"
                ? theme.palette.grey[50]
                : blueDark[800],
        "& strong": {
            color:
                theme.palette.mode === "dark"
                    ? theme.palette.primary[100] ?? "#fff"
                    : theme.palette.primary[800] ?? theme.palette.text.primary,
        },
    },
}));

const BlockquoteWarning = styled((props) => (
    <Typography component="blockquote" {...props} />
))(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    border: "1px solid",
    borderLeft: "6px solid",
    borderColor:
        theme.palette.mode === "dark"
            ? // Support Material Design theme
              theme.palette.warning[500] ?? theme.palette.warning.dark
            : theme.palette.warning[300] ?? theme.palette.warning.light,
    backgroundColor:
        theme.palette.mode === "dark"
            ? // Support Material Design theme
              alpha(
                  theme.palette.warning[900] ?? theme.palette.warning.dark,
                  0.2
              )
            : theme.palette.warning[50] ?? theme.palette.warning.light,
    padding: "10px 20px",
    margin: "20px 0",
    "& p": {
        marginBottom: 0,
        marginTop: 0,
        fontWeight: 400,
        color:
            theme.palette.mode === "dark"
                ? theme.palette.grey[50]
                : blueDark[800],
    },
}));

const BlockquoteMDX = (props) => (
    <Typography
        component="blockquote"
        color="blockquote"
        sx={{
            my: "20px",
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

const LiMDX = styled((props) => <Typography component="li" {...props} />)(
    ({ theme }) => ({
        marginTop: "8px",
        marginBottom: "8px",
        typography: "body1",
        fontFamily: "Rubik",
        color:
            theme.palette.mode === "dark"
                ? theme.palette.grey[400]
                : theme.palette.grey[800],
    })
);

const PreMDX = styled((props) => <Typography component="pre" {...props} />)(
    ({ theme }) => ({
        margin: theme.spacing(2, "auto"),
        padding: theme.spacing(2),
        backgroundColor: `${blueDark[900]} !important`,
        colorScheme: "dark",
        direction: "ltr",
        borderRadius: theme.shape.borderRadius,
        border: "1px solid",
        borderColor: blueDark[700],
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        maxWidth: "calc(100vw - 32px)",
        [theme.breakpoints.up("md")]: {
            maxWidth: "calc(100vw - 32px - 16px)",
        },
    })
);

// const PreMDX = ({ children }) => {
//     console.log(children);
//     return <pre>{children}</pre>;
// };

const mdxComponents = {
    h1: (props) => <TypographyH1 {...props} />,
    h2: (props) => <TypographyH2 {...props} />,
    h3: (props) => <TypographyH3 {...props} />,
    h4: (props) => <TypographyH4 {...props} />,
    p: (props) => <ParagraphMDX {...props} />,
    ImageMDX: (props) => (
        <ImageMDX layout={"intrinsic"} width={720} height={405} {...props} />
    ),
    blockquote: (props) => <BlockquoteMDXX {...props} />,
    li: (props) => <LiMDX {...props} />,
    pre: (props) => <PreMDX {...props} />,
    a: (props) => <AlinkMDX {...props} />,
    BlockquoteWarning: (props) => <BlockquoteWarning {...props} />,
    // table: (props) => <TableMDX />,
    // td: (props) => <TdMDX />,
    // th: (props) => <ThMDX />,
};

const PostLayout = ({ post }: { post: Post }) => {
    const Component = useMDXComponent(post.body.code);
    const theme = useTheme();
    // console.log(post);
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
                    <Typography
                        component="time"
                        variant="subtitle2"
                        sx={{ fontWeight: 400 }}
                    >
                        {format(parseISO(post.date), "LLLL d, yyyy")}
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            fontSize: "40px",
                            color:
                                theme.palette.mode === "dark"
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[900],
                        }}
                    >
                        {post.title}
                    </Typography>
                    <Stack
                        sx={{
                            justifyContent: "space-between",
                            pt: {
                                xs: 1,
                                md: 1,
                            },
                            alignItems: "center",
                            pb: 1,
                            color:
                                theme.palette.mode === "dark"
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[900],
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
                                    paddingTop: "2px",
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    fontFamily: "Rubik",
                                }}
                            >
                                Arrofi Reza Satria
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ alignItems: "baseline" }}
                        >
                            <Typography
                                component="p"
                                variant="subtitle1"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    fontFamily: "Rubik",
                                }}
                            >
                                10 min read
                            </Typography>
                            <Typography component="span" sx={{}}>
                                &bull;
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    fontFamily: "Rubik",
                                }}
                            >
                                213 views
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Component components={mdxComponents} />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingTop: "16px",
                    }}
                >
                    <Button
                        component={Link}
                        href="www.google.com"
                        endIcon={
                            <CreateIcon
                                sx={{
                                    height: "16px",
                                    width: "16px",
                                    paddingTop: "0px",
                                }}
                            />
                        }
                        sx={{
                            fontWeight: 400,
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Edit this page
                    </Button>
                </Box>
            </article>
        </ContainerHero>
    );
};

export default PostLayout;
