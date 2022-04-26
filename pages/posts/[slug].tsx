import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { fontSize } from "@mui/system";

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
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className="max-w-xl mx-auto py-8">
                <div className="text-center mb-8">
                    <time
                        dateTime={post.date}
                        className="text-xs text-gray-600 mb-1"
                    >
                        {format(parseISO(post.date), "LLLL d, yyyy")}
                    </time>
                    <h1>{post.title}</h1>
                </div>
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
                                props: { gutterBottom: true, variant: "h6" },
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
        </>
    );
};

export default PostLayout;
