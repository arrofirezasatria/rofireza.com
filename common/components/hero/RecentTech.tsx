import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import TechCard from '@components/hero/TechCard'
import { TECHs } from '@data/content/tech'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function RecentTech() {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Typography
                component="h3"
                variant="h5"
                sx={{
                    fontWeight: 'bold',
                    marginBottom: 1,
                    marginTop: '24px',
                }}
            >
                Recent Tech.
            </Typography>
            <Grid container spacing={2}>
                {TECHs.slice(3)
                    .reverse()
                    .map((data, index) => {
                        return (
                            <Grid item md={6} key={index}>
                                <TechCard item={data} />
                            </Grid>
                        )
                    })}
            </Grid>
            <Link href="/tech" passHref>
                <Typography
                    sx={{
                        my: 1.5,
                        fontSize: '12px',
                        lineHeight: 1.2,
                        fontWeight: 600,
                        cursor: 'pointer',
                        textAlign: 'end',
                        alignItems: 'center',
                        alignContent: 'center',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    {TECHs.length - 4} &#8226; More Tech{' '}
                    <ArrowRightAltIcon
                        sx={{
                            fontSize: '18px',
                            marginBottom: '-5px !important',
                        }}
                    />
                </Typography>
            </Link>
        </Box>
    )
}
