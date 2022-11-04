import React from 'react'
import ContainerHero from '@layouts/ContainerHero'
import axios from 'axios'
import {
    TextField,
    Typography,
    Paper,
    Box,
    Stack,
    Grid,
    Divider,
} from '@mui/material'
import SongCard from '@components/hero/SongCard'
import Image from 'next/image'

export default function playlist({ playlist }) {
    const a = ['', '', '', '']

    console.log(playlist)
    return (
        <ContainerHero>
            <Typography
                variant="h3"
                component={'h1'}
                sx={{ fontWeight: 600, mb: 2, fontFamily: 'rubik' }}
            >
                Playlist.
            </Typography>
            <Typography variant="body1">
                Most of the songs I like are from the JPOP genre, and many are
                from Japanese singers like TUYU, Yorushika, Higedan, Yoasobi,
                and many more singers. I Prefer YouTube over spotify because i
                can enjoy cover song
            </Typography>
            <TextField
                fullWidth
                size="small"
                label="Search"
                id="Search"
                sx={{ mt: 2 }}
            />
            <Divider sx={{ mt: 2, mb: '40px' }} />
            <Grid container spacing={2}>
                {playlist.map((item, index) => {
                    return (
                        <Grid item xs={12} md={12} key={index}>
                            {/* <SongCard
                                item={{
                                    src: '',
                                    srcSet: '',
                                    name: item.title,
                                    description: item.thumbnail.url,
                                    href: 'www.google.com',
                                }}
                            /> */}
                            <Stack direction={'row'} spacing={1}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        minWidth: '120px',
                                        height: '67.14px',
                                        borderRadius: '8px',
                                        overflow: 'clip',
                                    }}
                                >
                                    <Image
                                        src={item.thumbnail.url}
                                        layout="fill"
                                    />
                                </Box>
                                <Stack
                                    direction={'column'}
                                    spacing={0.5}
                                    sx={{
                                        flexGrow: 1,
                                        whiteSpace: 'noWrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <Typography noWrap>{item.title}</Typography>
                                    <Typography>{item.singer}</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
        </ContainerHero>
    )
}

export async function getStaticProps() {
    const youtube_api = process.env.YOUTUBE_API

    const playlist = await axios
        .get(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails%2C%20status%2C%20id&maxResults=6&playlistId=PLN8AHML34obuWGhlzCszGKG2_9gScbn0Z&key=${youtube_api}`
        )
        .then((res) => {
            const ress = res.data.items.map((item, index) => {
                const spesificDataSong: {
                    title: string
                    singer: string
                    thumbnail: string
                } = {
                    title: item.snippet.title,
                    singer:
                        item.snippet.videoOwnerChannelTitle === undefined
                            ? ''
                            : item.snippet.videoOwnerChannelTitle,
                    thumbnail:
                        item.snippet.thumbnails.medium === undefined
                            ? ''
                            : item.snippet.thumbnails.medium,
                }
                return spesificDataSong
            })
            return ress
        })

    return {
        props: {
            playlist,
        },
        revalidate: 360,
    }
}
