import React from 'react'
import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { allPosts, Post } from '.contentlayer/generated'

import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Links from 'next/link'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { useRouter } from 'next/router'

import { Prism } from 'react-syntax-highlighter'

import { useTheme, alpha, styled } from '@mui/material/styles'

import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create'
import ContainerHero from '@layouts/ContainerHero'
import { Box, Stack, Avatar, Divider } from '@mui/material'
import ImageMDX from '@components/post/ImageMDX'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

import {
    TypographyH1,
    TypographyH3,
    TypographyH2,
    TypographyH4,
    ParagraphMDX,
    BlockquoteMDXX,
    BlockquoteWarning,
    PreMDX,
    AlinkMDX,
    LiMDX,
} from '@components/post/TextComponent'
import ViewCounter from '@components/ViewCounter'
// import Prism from "prismjs";

export async function getStaticPaths() {
    const paths: string[] = allPosts.map((post) => post.url)

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post: Post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    )
    return {
        props: {
            post,
        },
    }
}

const mdxComponents = {
    h1: (props) => <TypographyH1 {...props} />,
    h2: (props) => <TypographyH2 {...props} />,
    h3: (props) => <TypographyH3 {...props} />,
    h4: (props) => <TypographyH4 {...props} />,
    p: (props) => <ParagraphMDX {...props} />,
    ImageMDX: (props) => (
        <ImageMDX layout={'intrinsic'} width={720} height={405} {...props} />
    ),
    blockquote: (props) => <BlockquoteMDXX {...props} />,
    li: (props) => <LiMDX {...props} />,
    pre: (props) => <PreMDX {...props} />,
    a: (props) => <AlinkMDX {...props} />,
    BlockquoteWarning: (props) => <BlockquoteWarning {...props} />,
    // table: (props) => <TableMDX />,
    // td: (props) => <TdMDX />,
    // th: (props) => <ThMDX />,
}

const PostLayout = ({ post }: { post: Post }) => {
    const Component = useMDXComponent(post.body.code)
    const theme = useTheme()
    // // console.log(post);
    // React.useEffect(() => {
    //     Prism.highlightAll();
    // }, []);

    const router = useRouter()

    return (
        <ContainerHero>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className="max-w-xl mx-auto py-8">
                <Link
                    onClick={() => router.back()}
                    underline="hover"
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle2">&#10094; Back</Typography>
                </Link>
                <Box sx={{ mb: 1 }}>
                    <Typography
                        component="time"
                        variant="subtitle2"
                        sx={{ fontWeight: 400 }}
                    >
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '40px',
                            color:
                                theme.palette.mode === 'dark'
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[900],
                        }}
                    >
                        {post.title}
                    </Typography>
                    <Stack
                        sx={{
                            pt: {
                                xs: 1,
                                md: 1,
                            },
                            alignItems: 'center',
                            pb: 1,
                            color:
                                theme.palette.mode === 'dark'
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[900],
                        }}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Avatar
                                sx={{
                                    width: '28px',
                                    height: '28px',
                                }}
                                src="/arrofi-small.webp"
                            />
                            <Stack>
                                <Typography
                                    component="h4"
                                    variant="subtitle1"
                                    sx={{
                                        fontSize: '15px !important',
                                        fontWeight: '500',
                                        fontFamily: 'Rubik',
                                        lineHeight: 1,
                                    }}
                                >
                                    Arrofi Reza Satria
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ lineHeight: 1, fontWeight: 400 }}
                                >
                                    @rofirezadev
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            direction={'row'}
                            spacing={0.6}
                            alignItems="center"
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 400 }}
                            >
                                {/*// @ts-ignore */}
                                {post.reading_time.text}
                            </Typography>
                            <Typography>&#8226;</Typography>
                            <ViewCounter slug={post.slug} />
                        </Stack>
                    </Stack>
                </Box>
                <Divider />
                <Component components={mdxComponents} />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        paddingTop: '16px',
                    }}
                >
                    <Button
                        component={Link}
                        href="www.google.com"
                        endIcon={
                            <CreateIcon
                                sx={{
                                    height: '16px',
                                    width: '16px',
                                    paddingTop: '0px',
                                }}
                            />
                        }
                        sx={{
                            fontWeight: 400,
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        Edit this page
                    </Button>
                </Box>
            </article>
        </ContainerHero>
    )
}

export default PostLayout
