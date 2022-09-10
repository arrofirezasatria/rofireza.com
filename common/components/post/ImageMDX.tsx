import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography, useTheme } from '@mui/material'

export default function ImageMDX(props) {
    const theme = useTheme()
    const { alt, ...rest } = props
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
            <Image alt={alt} {...rest} />
            <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                {alt}
            </Typography>
        </Box>
    )
}
