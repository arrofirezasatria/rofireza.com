import React, { PropsWithChildren } from 'react'
import { Post } from '../types'
import ContainerHero from './ContainerHero'

export default function ContainerBlog({
    children,
    post,
}: PropsWithChildren<{ post: Post }>) {
    return <ContainerHero>{children}</ContainerHero>
}
