import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography, useTheme } from '@mui/material'

const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
        triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export default function ImageMDX(props) {
    const theme = useTheme()
    const { alt, width, height, ...rest } = props
    return (
        <Box
            sx={{
                my: '20px',
                cursor: 'pointer',
                borderRadius: '12px',
                overflow: 'hidden',
                textAlign: 'center',
                // boxShadow: theme.shadows[4],
                // '& img': {
                //     border: '2px solid red',
                //     // borderWidth: '2px',
                //     // borderColor: 'red',
                //     // borderRadius: '12px',
                // },
                '&:hover': {},
            }}
        >
            <Image
                alt={alt}
                placeholder="blur"
                blurDataURL={rgbDataURL(2, 129, 210)}
                width={width}
                height={height}
                {...rest}
            />
            <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                {alt}
            </Typography>
        </Box>
    )
}
