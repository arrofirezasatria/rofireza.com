import React from 'react'

import Links from 'next/link'
import { Box, Link, Paper, Stack, Typography } from '@mui/material'
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
                        md: '0.6rem 1rem 0.6rem 1.5rem',
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
                <Stack
                    direction={'row'}
                    sx={{
                        height: '100px',
                    }}
                    spacing={1.5}
                >
                    {/* <Paper
                        sx={{
                            // backgroundColor: 'black',
                            width: '100px !important',
                            borderRadius: '8px  8px 8px  8px',
                            overflow: '',
                            textAlign: 'center',
                            textJustify: 'center',
                        }}
                        elevation={4}
                    >
                        as
                    </Paper> */}
                    <Stack
                        spacing={0.5}
                        // width={'calc(100% - 115px)'}
                        sx={{
                            display: 'inline-block',
                            justifyContent: 'space-between',
                            alignItems: {
                                md: 'flex-start',
                                xs: 'flex-start',
                            },
                            whiteSpace: 'noWrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '22px',
                                fontFamily: 'Rubik',
                                color: '#508fd3',
                                whiteSpace: 'noWrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {title}
                        </Typography>
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
                                color:
                                    theme.palette.mode === 'dark'
                                        ? 'white'
                                        : theme.palette.text.secondary,
                            }}
                        >
                            {summary}
                        </Typography>
                    </Stack>
                </Stack>
            </Link>
        </Links>
    )
}
