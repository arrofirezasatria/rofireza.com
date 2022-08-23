import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { alpha, styled } from '@mui/material/styles'
import { IconButton, Typography, Avatar, Button, SvgIcon } from '@mui/material'
import { grey, blueDark, blue } from 'modules/ThemeContext'

import EmailSubscriber from './footer/EmailSubscriber'
import EmailIcon from '@mui/icons-material/Email'

import Links from 'next/link'
import ReactComponentElement from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import VSCodeIcon from 'public/logo/visual-studio-code-icon.png'
import Image from 'next/image'
import LaunchRounded from '@mui/icons-material/LaunchRounded'
import useSWR from 'swr'
import fetcher from '@lib/fetcher'

const StyledLink = styled((props) => <Link underline="none" {...props} />)(
    ({ theme }) => ({})
)

const socials = [
    {
        name: 'YouTube',
        link: 'https://www.youtube.com/channel/UChey2Z5IrugYJH75bzs-gUw',
    },
    { name: 'Twitter', link: 'https://twitter.com/rofirezadev' },
    { name: 'GitHub', link: 'https://github.com/arrofirezasatria' },
    { name: 'DEV.to', link: 'https://github.com/arrofirezasatria' },
]

const pages = [
    { name: 'Home', link: '/' },
    { name: 'Tech', link: '/tech' },
    { name: 'Blog', link: '/blog' },
    { name: 'Video', link: '/video' },
]

const hobby = [
    {
        name: 'Playlist',
        link: '#',
    },
    {
        name: 'Movies',
        link: '#',
    },
    { name: 'games', link: '#' },
]

export default function Footer() {
    const status = useSWR('/api/status', fetcher)

    return (
        <Container component="footer" maxWidth="md" sx={{ pb: 0, pt: 0 }}>
            <Divider sx={{ mb: '40px' }} />
            <Grid
                container
                spacing={2}
                direction={{
                    xs: 'column',
                    md: 'row',
                }}
                sx={{ px: 6 }}
            >
                <Grid item xs={7}>
                    {/* <Avatar sx={{ width: '32px', height: '32px' }}>A</Avatar>  */}
                    <Stack direction={'row'} spacing={1}>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            alignContent="center"
                            pt="4px"
                        >
                            <Image
                                src={'/logo/visual-studio-code-icon.png'}
                                width={'24px'}
                                height={'24px'}
                            />
                        </Box>
                        <Stack>
                            <Stack
                                direction={'row'}
                                spacing={0.5}
                                sx={{
                                    display: 'flex',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <FiberManualRecordIcon
                                    sx={{
                                        fontSize: '14px',
                                        color: 'green !important',
                                    }}
                                />
                                <Typography variant="subtitle2">
                                    Online -{' '}
                                    <Link href="#" underline="hover">
                                        <Typography
                                            component={'a'}
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: 500,
                                                color: '#7289da',
                                            }}
                                        >
                                            Discord
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Stack>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, lineHeight: 1 }}
                            >
                                Visual Studio Code
                            </Typography>
                        </Stack>
                    </Stack>
                    {/* 
                    <Box sx={{ ml: { md: 0, xs: 0 }, mt: 0.5 }}>
                        <Box sx={{ height: '50px' }}>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500 }}
                            >
                                Reach me on,
                            </Typography>
                        </Box>
                    </Box> */}
                </Grid>
                <Grid item xs={5}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Stack
                                spacing={1}
                                sx={{
                                    fontSize: '16px',
                                    textDecoration: 'none',
                                    marginLeft: 3,
                                }}
                            >
                                {pages.map((page) => {
                                    return (
                                        <Links href={page.link} passHref>
                                            <Link
                                                underline="none"
                                                variant="body1"
                                                color={'gray'}
                                                sx={{
                                                    transition:
                                                        'all 0.25s ease-in-out',
                                                    '&:hover': {
                                                        color: 'aqua',
                                                    },
                                                }}
                                            >
                                                {page.name}
                                            </Link>
                                        </Links>
                                    )
                                })}
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack
                                spacing={1}
                                sx={{
                                    fontSize: '16px',
                                    textDecoration: 'none',
                                    marginLeft: 6,
                                }}
                            >
                                {socials.map((social) => {
                                    return (
                                        <Link href="#" underline="none">
                                            <Typography
                                                variant="body1"
                                                color={'gray'}
                                                sx={{
                                                    transition:
                                                        'all 0.25s ease-in-out',
                                                    '&:hover': {
                                                        color: 'aqua',
                                                    },
                                                }}
                                            >
                                                {social.name}
                                            </Typography>
                                        </Link>
                                    )
                                })}
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ pt: '40px' }} />
            <Stack
                direction="row"
                sx={{ justifyContent: 'space-between', px: '60px' }}
            >
                <Box sx={{ py: 2 }}>
                    <Typography variant="subtitle2" sx={{ color: 'inherit' }}>
                        {' '}
                        © {new Date().getFullYear()} Arrofi Reza Satria.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        my: 2,
                        px: 1,
                    }}
                >
                    <Link
                        underline="none"
                        display="inline-block"
                        fontSize="xs"
                        fontWeight="semibold"
                        _hover={{ textDecoration: 'none' }}
                        href="https://vercel.com"
                        isExternal1
                    >
                        <Typography variant="subtitle2" color={'black'}>
                            Powered by{' '}
                            <Typography
                                component="span"
                                role="img"
                                aria-label="Vercel logo"
                                sx={{ color: '' }}
                            >
                                ▲
                            </Typography>{' '}
                            Vercel
                        </Typography>
                    </Link>
                </Box>
            </Stack>
        </Container>
    )
}
