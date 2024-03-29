import React from 'react'
import Head from 'next/head'
import AppBarHero from '../components/AppBar'
import Footer from '@layouts/Footer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function ContainerHero(props) {
    const { children, ...customMeta } = props
    return (
        <div>
            <Head>
                <title>{'Arrofi Reza - Developer'}</title>
                <meta name="robots" content="follow, index" />
                <meta
                    content={'Arrofi Reza S. - Developer, Blogger, Teacher'}
                    name="description"
                />
                {/*
                    <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
                    <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
                    <meta property="og:type" content={meta.type} />
                    <meta property="og:site_name" content="Lee Robinson" />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:image" content={meta.image} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@rofireza" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta name="twitter:description" content={meta.description} />
                    <meta name="twitter:image" content={meta.image} /> 
                */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>
            <AppBarHero />
            <Container
                component="main"
                maxWidth="md"
                sx={{
                    paddingTop: 8,
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
