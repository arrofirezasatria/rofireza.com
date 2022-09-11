import 'styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import ThemeContext from '../modules/ThemeContext'

import { GoogleAnalytics } from 'nextjs-google-analytics'

import '../styles/prismokaida.css'
// import "../styles/prism.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const [hasMounted, setHasMounted] = React.useState(false)
    React.useEffect(() => {
        setHasMounted(true)
    }, [])
    if (!hasMounted) {
        return null
    }
    return (
        <SessionProvider session={session}>
            <ThemeContext>
                <GoogleAnalytics
                    trackPageViews
                    gaMeasurementId={process.env.GOOGLE_ANAYLTICS_ID}
                />
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeContext>
        </SessionProvider>
    )
}

export default MyApp
