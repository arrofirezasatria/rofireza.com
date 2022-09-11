import React from 'react'

import Links from 'next/link'
import { Box, Link, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function BlogCard({
    title,
    url,
    time_ago,
    summary,
    reading_time,
}) {
    const theme = useTheme()

    return (
        <Links href={url} passHref>
            <Link
                sx={{
                    textDecoration: 'none',
                    padding: {
                        xs: '0rem 0rem 0rem 0rem',
                        md: '1rem 1rem 1rem 1.5rem',
                    },
                    transition: 'all .3s ease',
                    borderRadius: { xs: '4px', md: '10px' },
                    '&:hover': {
                        // border: "1px solid lightGray",
                        backgroundColor: 'lightGray',
                        transform: 'scale(1.025, 1.025)',
                        // color: "red",
                        // transitionDuration: "300ms",
                        // transitionProperty: "all",
                        // transitionTimingFunction: "300ms",
                        // color: "red !important",
                    },
                }}
            >
                <Box>
                    <Stack
                        spacing={0.5}
                        sx={{
                            justifyContent: 'space-between',
                            alignItems: {
                                md: 'flex-start',
                                xs: 'flex-start',
                            },
                        }}
                    >
                        <Typography variant="h6">{title}</Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ color: theme.palette.text.secondary }}
                        >
                            <Typography>{time_ago}</Typography>
                            <Typography>&bull;</Typography>
                            <Typography>{reading_time}</Typography>
                        </Stack>
                        <Typography
                            component="p"
                            sx={{
                                color: theme.palette.text.secondary,
                            }}
                        >
                            {summary}
                        </Typography>
                    </Stack>
                </Box>
            </Link>
        </Links>
    )
}
