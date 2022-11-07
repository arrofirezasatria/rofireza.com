import ContainerHero from '@layouts/ContainerHero'
import { Typography } from '@mui/material'
import React from 'react'

export default function snippet() {
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
            asd
        </ContainerHero>
    )
}
