import Links from 'next/link'
import useSWR from 'swr'
import {
    Typography,
    Link,
    Stack,
    Box,
    Container,
    Divider,
    Grid,
} from '@mui/material'
import fetcher from '@lib/fetcher'
import { social, page, hobby } from 'data/content/footer'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const StyledLink = ({ title, url }) => {
    return (
        <Link href={url} underline="none">
            <Typography
                variant="body1"
                color={'gray'}
                sx={{
                    transition: 'all 0.25s ease-in-out',
                    '&:hover': {
                        color: 'aqua',
                    },
                }}
            >
                {title}
            </Typography>
        </Link>
    )
}

export default function Footer() {
    const { data, error } = useSWR('/api/status', fetcher)

    return (
        <Container component="footer" maxWidth="md" sx={{ pb: 0, pt: 0 }}>
            <Divider sx={{ my: '40px' }} />
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
                    <Stack direction={'row'} spacing={1}>
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
                                        fontSize: '12px',
                                        color: 'green !important',
                                    }}
                                />
                                <Typography
                                    variant="subtitle2"
                                    sx={{ pb: '2px', lineHeight: 1 }}
                                >
                                    {data?.status}
                                </Typography>
                            </Stack>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    lineHeight: 1,
                                }}
                            >
                                {data?.activities === ''
                                    ? ''
                                    : data?.activities}
                            </Typography>
                        </Stack>
                    </Stack>
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
                                {page.map((page) => {
                                    return (
                                        <StyledLink
                                            title={page.name}
                                            url={page.link}
                                        />
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
                                {social.map((social) => {
                                    return (
                                        <StyledLink
                                            title={social.name}
                                            url={social.link}
                                        />
                                    )
                                })}
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: '40px' }} />
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
                        href="https://vercel.com"
                    >
                        <Typography variant="subtitle2" color={'black'}>
                            Powered by{' '}
                            <Typography
                                component="span"
                                role="img"
                                aria-label="Vercel logo"
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