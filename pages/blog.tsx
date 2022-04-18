import React from "react";

export default function blog({ posts }) {
    return <div>blog</div>;
}

async function getStaticProps() {
    const posts = { name: "ada" };

    return {
        props: { posts },
    };
}
