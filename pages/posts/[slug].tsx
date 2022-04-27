import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { fontSize } from "@mui/system";

import ContainerHero from "components/ContainerHero";
import { Box, Stack, Avatar, Divider } from "@mui/material";

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

const PostLayout = ({ post }: { post: Post }) => {
    return (
        <ContainerHero>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className="max-w-xl mx-auto py-8">
                <Box sx={{ mb: 1 }}>
                    <time
                        dateTime={post.date}
                        className="text-xs text-gray-600 mb-1"
                    >
                        {format(parseISO(post.date), "LLLL d, yyyy")}
                    </time>
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
                            pt: 2,
                            alignItems: "center",
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
                            a: { component: Link },
                        },
                    }}
                >
                    {post.body.html}
                </ReactMarkdown>
            </article>
        </ContainerHero>
    );
};

export default PostLayout;
