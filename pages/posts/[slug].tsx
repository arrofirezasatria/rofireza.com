import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { fontSize } from "@mui/system";
import { useMDXComponent } from "next-contentlayer/hooks";

import Image from "next/image";

import ContainerHero from "components/ContainerHero";
import { Box, Stack, Avatar, Divider } from "@mui/material";
import ImageMDX from "components/mdxcomponents/ImageMDX";

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

function MarkdownListItem(props: any) {
    return (
        <Box
            component="li"
            sx={{ mt: 1, typography: "body1", color: "text.secondary" }}
            {...props}
        />
    );
}

const PostLayout = ({ post }: { post: Post }) => {
    console.log(post);

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
                <ReactMarkdown
                    options={{
                        overrides: {
                            h1: {
                                component: Typography,
                                props: {
                                    gutterBottom: true,
                                },
                            },
                            h2: {
                                component: Typography,
                                props: {
                                    gutterBottom: true,
                                    variant: "h5",
                                },
                            },
                            h3: {
                                component: Typography,
                                props: {
                                    gutterBottom: true,
                                    variant: "subtitle1",
                                },
                            },
                            h4: {
                                component: Typography,
                                props: {
                                    gutterBottom: true,
                                    variant: "caption",
                                    paragraph: true,
                                },
                            },
                            p: {
                                component: Typography,
                                props: {
                                    component: "p",
                                    color: "text.secondary",
                                    sx: {
                                        my: "20px",
                                        "& > a ": {
                                            fontWeight: 600,
                                            "&:hover": {
                                                color: "#5090D3",
                                                transitionProperty: "all",
                                                transitionTimingFunction:
                                                    "cubic-bezier(.4,0,.2,1)",
                                                transitionDuration: ".2s",
                                            },
                                        },
                                    },
                                },
                            },
                            a: { component: Link },
                            ImageMDX: {
                                component: ImageMDX,
                            },
                            blockquote: {
                                component: Typography,
                                props: {
                                    component: "blockquote",
                                    color: "blockquote",
                                    sx: {
                                        color: "white",
                                        paddingLeft: "16px",
                                        fontStyle: "italic",
                                        borderLeftWidth: "0.25rem",
                                        "& > p": {
                                            fontWeight: 600,
                                        },
                                    },
                                },
                            },

                            li: {
                                component: MarkdownListItem,
                            },

                            // ImageMDX: {
                            //     component: (props) => {
                            //         return (
                            //             <Box>
                            //                 <Image {...props} />
                            //             </Box>
                            //         );
                            //     },
                            // },
                        },
                    }}
                >
                    {post.body.raw}
                </ReactMarkdown>
                <Typography component="p" color="secondary">
                    adadadad
                </Typography>
            </article>
        </ContainerHero>
    );
};

export default PostLayout;
