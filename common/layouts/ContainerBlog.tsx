import React, { PropsWithChildren } from 'react'
import ContainerHero from './ContainerHero'
import { Post } from '.contentlayer/generated'

export default function ContainerBlog({
    children,
    post,
}: PropsWithChildren<{ post: Post }>) {
    console.log(post)
    return (
        <ContainerHero
            title={`${post.title} – Arrofi Reza S.`}
            description={post.summary}
            date={new Date(post.date).toISOString()}
            type="article"
        >
            {children}
        </ContainerHero>
    )
}
