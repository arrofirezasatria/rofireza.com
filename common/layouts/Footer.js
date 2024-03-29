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
import Image from 'next/image'
import { FaDragon, GiDoubleDragon } from 'react-icons/fa'
import { useTheme } from '@mui/material'
import { GiSpikedDragonHead } from 'react-icons/gi'

const StyledLink = ({ title, url }) => {
    return (
        <Link href={url} underline="none">
            <Typography
                variant="body1"
                color={
                    useTheme().palette.mode === 'dark' ? '#B2BAC2' : '#3E5060'
                }
                sx={{
                    transition: 'all 0.25s ease-in-out',
                    '&:hover': {
                        color: '#007FFF',
                    },
                }}
            >
                {title}
            </Typography>
        </Link>
    )
}

export default function Footer() {
    const { data, error } = useSWR('/api/status', fetcher, {
        refreshInterval: 60000,
    })

    const theme = useTheme()

    return (
        <Container component="footer" maxWidth="md" sx={{ pb: 0, pt: 0 }}>
            <Divider sx={{ my: '40px' }} />
            <Grid
                container
                spacing={4}
                direction={{
                    xs: 'column',
                    md: 'row',
                }}
                sx={{ px: { xs: 0, md: 6 } }}
            >
                <Grid item xs={12} md={7}>
                    <Stack direction={'row'} spacing={1}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            {data?.status === 'offline' ? (
                                <GiSpikedDragonHead size={26} />
                            ) : (
                                <Image
                                    src={'/logo/visual-studio-code-icon.png'}
                                    width={22}
                                    height={22}
                                />
                            )}
                        </Box>
                        <Stack>
                            <Stack
                                direction={'row'}
                                spacing={0.5}
                                sx={{
                                    display: 'flex',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        height: '12px',
                                        display: 'flex',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <FiberManualRecordIcon
                                        sx={{
                                            fontSize: '12px',
                                            color:
                                                data?.status === 'online'
                                                    ? 'green'
                                                    : data?.status === 'idle'
                                                    ? 'orange'
                                                    : 'gray',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            '&::after': {
                                                position: 'absolute',
                                                display:
                                                    data?.status !== 'online'
                                                        ? 'none'
                                                        : 'initial',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '50%',
                                                animation:
                                                    'ripple 1.2s infinite ease-in-out',
                                                border: '1px solid green',
                                                content: '""',
                                            },
                                            '@keyframes ripple': {
                                                '0%': {
                                                    transform: 'scale(.4)',
                                                    opacity: 1,
                                                },
                                                '100%': {
                                                    transform: 'scale(1.5)',
                                                    opacity: 0,
                                                },
                                            },
                                        }}
                                    />
                                </Box>
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
                                    ? 'Currently - ' + 'Slay The Dragons Code'
                                    : '' + data?.activities}
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Stack
                                spacing={1}
                                sx={{
                                    fontSize: '16px',
                                    textDecoration: 'none',
                                    marginLeft: { xs: 0, md: 3 },
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
                        <Grid item xs={12} md={6}>
                            <Stack
                                spacing={1}
                                sx={{
                                    fontSize: '16px',
                                    textDecoration: 'none',
                                    marginLeft: { xs: 0, md: 6 },
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
                sx={{
                    justifyContent: 'space-between',
                    px: { xs: 0, md: '60px' },
                }}
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
                        backgroundColor:
                            theme.palette.mode === 'dark' ? 'white' : 'none',
                        borderRadius: '8px',
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
