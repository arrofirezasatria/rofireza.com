import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.md`,

    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        date: {
            type: "date",
            description: "The date of the post",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc) => `/contents/posts/${doc._raw.flattenedPath}`,
        },
    },
}));

const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: "blog/*.mdx",
    fields: {
        title: { type: "string", required: true },
        publishedAt: { type: "string", required: true },
        summary: { type: "string", required: true },
        description: { type: "string", required: true },
        seoDescription: { type: "string", required: true },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
        },
    },
}));

export default makeSource({
    // contentDirPath: "posts",
    // documentTypes: [Post],

    contentDirPath: "contents",
    documentTypes: [Blog],
});
