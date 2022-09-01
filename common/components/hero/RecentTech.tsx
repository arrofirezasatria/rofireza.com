import React from 'react'
import { Grid, Typography } from '@mui/material'
import TechCard from '@components/hero/TechCard'
import { TECHs } from '@data/content/tech'

export default function RecentTech() {
    return (
        <>
            <Typography
                component="h3"
                variant="h5"
                sx={{
                    fontWeight: 'bold',
                    marginBottom: 1,
                    marginTop: '40px',
                }}
            >
                Recent Tech.
            </Typography>
            <Grid container spacing={2}>
                {TECHs.slice(3)
                    .reverse()
                    .map((data, index) => {
                        return (
                            <Grid item md={6} key={index}>
                                <TechCard item={data} />
                            </Grid>
                        )
                    })}
            </Grid>
        </>
    )
}
