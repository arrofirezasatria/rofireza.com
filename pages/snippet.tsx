import React, { Suspense, useState } from 'react'
import ContainerHero from '@layouts/ContainerHero'
import { Divider, Stack, TextField, Typography } from '@mui/material'
import SnippetCard from '@components/post/SnippetCard'
import { allPosts } from '.contentlayer/generated'
import { pick } from '@contentlayer/utils'

export default function Snippet({ data_posts }) {
    const [searchValue, setSearchValue] = useState<string>('')

    const filteredBlogPosts = data_posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (
        <ContainerHero>
            <Typography
                variant="h3"
                component={'h1'}
                sx={{ fontWeight: 600, mb: 2, fontFamily: 'rubik' }}
            >
                Snippet.
            </Typography>
            <Typography variant="body1">
                This is a list of technologies that I have used and this is also
                a bookmark for my future technology projects.
            </Typography>
            <TextField
                fullWidth
                onChange={() => {}}
                size="small"
                label="Search"
                id="Search"
                sx={{ mt: 2 }}
            />

            {/* 
            
            <Box
                sx={{ display: 'flex', mt: 2, justifyContent: 'space-around' }}
            >
                {techCategory.map((tech, index) => {
                    return (
                        <Button key={index} onClick={() => setValue(tech)}>
                            <Typography variant="subtitle2">{tech}</Typography>
                        </Button>
                    )
                })}
            </Box> 
            
            */}
            <Divider sx={{ mt: 2, mb: '16px' }} />

            <Suspense fallback={null}>
                <Stack spacing={2} sx={{ pb: 2, pt: 2 }}>
                    {filteredBlogPosts.map((post, index) => {
                        return (
                            <SnippetCard
                                key={index}
                                title={post.title}
                                url={post.url}
                                summary={post.summary}
                                index={index}
                            />
                        )
                    })}
                </Stack>
            </Suspense>
        </ContainerHero>
    )
}

export async function getStaticProps() {
    const data_posts = allPosts
        .filter((post) => post.category === 'snippet')
        .map((post) =>
            pick(post, [
                'title',
                'slug',
                'date',
                'summary',
                'url',
                'reading_time',
                'time_ago',
                'image',
            ])
        )

    return {
        props: { data_posts },
    }
}
