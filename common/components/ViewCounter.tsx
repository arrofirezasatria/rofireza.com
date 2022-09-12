import { useEffect } from 'react'
import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import { Views } from 'lib/types'
import { Box, Typography } from '@mui/material'

export default function ViewCounter({ slug }) {
    const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
    const views = new Number(data?.total)

    useEffect(() => {
        const registerView = () =>
            fetch(`/api/views/${slug}`, {
                method: 'POST',
            })

        registerView()
    }, [slug])

    return (
        <Box sx={{ display: 'flex', mr: 1 }}>
            <Typography
                component="span"
                variant="subtitle2"
                sx={{ fontWeight: 500, lineHeight: 1 }}
            >
                {`${views > 0 ? views.toLocaleString() : '–––'} views`}
            </Typography>
        </Box>
    )
}
