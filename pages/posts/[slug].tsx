import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allBlogs, Blog } from "contentlayer/generated";

export async function getStaticPaths() {
    //console.log(allBlogs);
    const paths: string[] = allBlogs.map((post) => post.slug);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log("asdasd");
    console.log(params.slug);
    const blog = allBlogs.find((blog) => blog.slug === params.slug);

    console.log(blog);
    return {
        props: {
            blog,
        },
    };
}

const PostLayout = ({ blog }: { blog: Blog }) => {
    console.log("adadad");
    return (
        <>
            <Head>
                <title>{blog.title}</title>
            </Head>
            <article className="max-w-xl mx-auto py-8">
                <div className="text-center mb-8">
                    <time
                        dateTime={blog.publishedAt}
                        className="text-xs text-gray-600 mb-1"
                    >
                        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
                    </time>
                    <h1>{blog.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
            </article>
        </>
    );
};

export default PostLayout;
