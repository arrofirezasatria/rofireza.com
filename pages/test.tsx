import React from 'react'
import swr from 'swr'
import ContainerHero from '@layouts/ContainerHero'
import axios from 'axios'
import Image from 'next/image'
import { Box } from '@mui/material'

export default function test() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Image
                src={'/showcase/original/default-image.jpg'}
                layout={'fill'}
                srcSet={''}
            />
        </Box>
    )
}
