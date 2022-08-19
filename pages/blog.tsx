import { alpha, Divider, Stack, styled, Typography } from '@mui/material'
import { allPosts } from '.contentlayer/generated'
import { pick } from '@contentlayer/utils'
import { Suspense } from 'react'
import BlogCard from 'components/post/BlogCard'
import ContainerHero from 'components/ContainerHero'
import Footprint from 'components/Footprint'
import ViewCounter from 'components/ViewCounter'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import TextField from '@mui/material/TextField'
import React from 'react'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    // '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.55),
    // },
    marginTop: '24px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    borderRadius: '8px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
            '&:focus': {
                backgroundColor: 'lightGray',
            },
        },
    },
}))

export default function Blog({ data_posts }) {
    const [searchValue, setSearchValue] = React.useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

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
                Blog
            </Typography>
            <Typography variant="body1">
                I have been Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Molestias nostrum quaerat eligendi aperiam consequatur
                asperiores aliquam officiis est assumenda modi sit libero
                architecto, dolor quidem tempora eius minima quo unde?
            </Typography>

            {/* <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search> */}

            <TextField
                fullWidth
                onChange={handleChange}
                size="small"
                label="Search"
                id="Search"
                sx={{ my: 2 }}
            />
            <Divider />
            <Suspense fallback={null}>
                <Stack spacing={2} sx={{ pb: 2, pt: 2 }}>
                    {filteredBlogPosts.map((post, index) => {
                        return (
                            <BlogCard
                                key={index}
                                title={post.title}
                                url={post.url}
                                time_ago={post.time_ago}
                                summary={post.summary}
                                reading_time={post.reading_time.text}
                            />
                        )
                    })}
                </Stack>
            </Suspense>
            {/* <>
                {data_posts.slice(1).map((post, index) => {
                    return (
                        <div>
                            {post.slug}
                            <ViewCounter slug={post.slug} />
                        </div>
                    )
                })}
            </> */}
            {/* <Footprint /> */}
        </ContainerHero>
    )
}

export async function getStaticProps() {
    const data_posts = allPosts.map((post) =>
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
