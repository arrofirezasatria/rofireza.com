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

const PostLayout = ({ post }: { post: Post }) => {
    console.log(post);

    return (
        <ContainerHero variantContainer="blog">
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className="max-w-xl mx-auto py-8">
                <Box sx={{ mb: 1 }}>
                    <Typography component="time" variant="body2">
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
                                    color: "gray",
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
                                    color: "gray",
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
                                    color: "gray",
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
                                    sx: {
                                        my: "20px",
                                    },
                                },
                            },
                            a: { component: Link },
                            ImageMDX: {
                                component: ImageMDX,
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
            </article>
        </ContainerHero>
    );
};

export default PostLayout;
