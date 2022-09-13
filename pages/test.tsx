import React from 'react'
import swr from 'swr'
import ContainerHero from '@layouts/ContainerHero'
import axios from 'axios'
import Image from 'next/image'
import { Box } from '@mui/material'

export default function test() {
    return (
        <Box sx={{ position: 'relative', width: '1080px', height: '720px' }}>
            <Image
                src="https://ik.imagekit.io/rofireza/10.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655026733699"
                layout="fill"
            />
        </Box>
    )
}
