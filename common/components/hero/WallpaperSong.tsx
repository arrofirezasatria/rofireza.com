import React from 'react'
import {
    Paper,
    Box,
    Typography,
    Stack,
    Avatar,
    Link as Links,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function WallpaperSong() {
    return (
        <Paper
            elevation={8}
            sx={{
                position: 'relative',
                width: 'auto',
                height: '120px',
                marginBottom: 5,
                borderRadius: '8px',
                overflow: 'hidden',

                '&:hover': {
                    '& div': {
                        transitionProperty: 'opacity',
                        transitionDuration: '300ms',
                        opacity: '1',
                    },
                },
            }}
        >
            <Image
                src="/one voice - rokudenashi.webp"
                layout="fill"
                objectFit="cover"
                alt="Rokudenashi - One Voice"
                blurDataURL="LFFG*5-o00Mw00Io=c%L}Zn$RiNH"
                placeholder="blur"
                priority={true}
            />
            <Box
                sx={{
                    position: 'absolute',
                    background: 'rgba(0,0,0,0.36)',
                    width: '100%',
                    height: '100%',
                    px: '0.8rem',
                    py: '0.5rem',
                    transitionProperty: 'opacity',
                    transitionDuration: '300ms',
                    opacity: '0',
                }}
            >
                <Stack
                    sx={{
                        height: '100%',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 'bold',
                        }}
                    >
                        Recent Song.
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Stack direction="row" spacing={1}>
                            <Avatar
                                sizes="small"
                                src="/song-image/channels4_profile.jpg"
                                sx={{
                                    width: '32px',
                                    height: '32px',
                                }}
                            />
                            <Stack>
                                <Links
                                    href="https://www.youtube.com/watch?v=5GUaMOpfmr8"
                                    underline="none"
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: '600',
                                            color: 'white',
                                            fontSize: '18px',
                                            lineHeight: 1,
                                        }}
                                    >
                                        One Voice
                                    </Typography>
                                </Links>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        lineHeight: 1.2,
                                        fontWeight: 600,
                                    }}
                                >
                                    ロクデナシ : Rokudenashi
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={0.5}
                            sx={{
                                display: 'flex',
                                height: '100%',
                                alignItems: 'flex-end',
                                textAlign: 'end',
                            }}
                        >
                            <Link href="https://nextjs.org/docs/api-reference/next/link">
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        lineHeight: 1.2,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    View Playlist
                                </Typography>
                            </Link>
                            <ArrowRightAltIcon
                                sx={{
                                    fontSize: '1rem',
                                    marginBottom: '-2px !important',
                                }}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Paper>
    )
}
