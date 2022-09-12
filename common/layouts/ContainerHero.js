import React from 'react'
import Head from 'next/head'
import AppBarHero from '../components/AppBar'
import Footer from '@layouts/Footer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'

export default function ContainerHero(props) {
    const router = useRouter()
    const { children, ...customMeta } = props

    const meta = {
        title: 'Arrofi Reza S. - SEO and Front End Developer ',
        description: `SEO and Front End, New Tech entusiast, Like Japan music`,
        image: '',
        type: 'website',
        ...customMeta,
    }

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://rofireza.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://rofireza.com${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Arrofi Reza S." />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@rofirezadev" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                    <meta
                        property="article:published_time"
                        content={meta.date}
                    />
                )}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
            </Head>
            <AppBarHero />
            <Container
                component="main"
                maxWidth="md"
                sx={{
                    paddingTop: { xs: 4, md: 8 },
                    px: {
                        md: '90px !important',
                    },
                }}
            >
                {children}
            </Container>
            <Footer />
        </div>
    )
}
