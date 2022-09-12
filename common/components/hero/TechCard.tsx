import { Avatar, Box, Paper, Typography } from '@mui/material'
import LaunchRounded from '@mui/icons-material/LaunchRounded'
import React from 'react'
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'

function stringToColor(string: string) {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff
        color += `00${value.toString(16)}`.slice(-2)
    }
    /* eslint-enable no-bitwise */

    return color
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}`,
    }
}

export default function TechCard({
    item,
    inView = false,
    logoSize = 40,
}: {
    item: {
        src: string
        srcSet: string
        name: string
        description: string
        href: string
    }
    inView?: boolean
    logoSize?: number | string
}) {
    const theme = useTheme()

    return (
        <Paper
            component={Link}
            // noLinkStyle
            href={item.href}
            // target="_blank"
            // rel="sponsored noopener"
            // variant="outlined"
            elevation={3}
            sx={{
                p: 2,
                display: 'flex',
                height: '100%',
                textDecoration: 'none !important',
                cursor: 'pointer',
                '& svg': {
                    transition: '0.2s',
                },
                '&:hover': {
                    boxShadow: theme.shadows[10],

                    '& svg': {
                        // transform: "translateY(-2px)",
                    },
                },
            }}
        >
            <Avatar
                sizes={'40px'}
                sx={{
                    borderRadius: '4px',
                    backgroundColor: 'transparent',
                    color: 'gray',
                    '& img': {
                        width: `${logoSize}px !important`,
                        height: `${logoSize}px !important`,
                    },
                }}
            >
                {item.src ? (
                    <Image
                        layout="fill"
                        src={item.src}
                        alt={item.name}
                        priority={true}
                    />
                ) : (
                    <>{item.name.charAt(0)}</>
                )}
            </Avatar>
            <Box
                sx={{
                    ml: 2,
                    whiteSpace: 'noWrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{ textDecoration: 'none', fontWeight: 500 }}
                >
                    {item.name}
                    <LaunchRounded
                        color="primary"
                        sx={{
                            fontSize: 14,
                            verticalAlign: 'middle',
                            ml: 0.5,
                        }}
                    />
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                    {item.description}
                </Typography>
            </Box>
        </Paper>
    )
}
