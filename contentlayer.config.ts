import { defineDocumentType, makeSource } from "contentlayer/source-files";

import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeHighlight from "rehype-highlight";
import { format } from "timeago.js";

const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        date: {
            type: "string",
            required: true,
        },
        summary: {
            type: "string",
            required: true,
        },
        image: {
            type: "string",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
        },
        reading_time: {
            type: "number",
            resolve: (doc) => readingTime(doc.body.raw),
        },
        time_ago: {
            type: "number",
            resolve: (doc) => format(doc.date, "en_US"),
        },
    },
}));

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["anchor"],
                    },
                },
            ],
        ],
    },
});
