import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContainerHero from "../components/ContainerHero";

export default function Dashboard() {
    return (
        <ContainerHero>
            <Box>
                <Typography>Dashboard</Typography>
                <Box>
                    <Typography>
                        This is my personal dashboard, built with Next.js API
                        routes deployed as serverless functions. I use this
                        dashboard to track various metrics across platforms like
                        Unsplash, YouTube, GitHub, and more. Want to build your
                        own? Check out my&nbsp;
                    </Typography>
                </Box>
            </Box>
            <Grid container>
                <Grid item xs={12} md={6}>
                    a
                </Grid>
                <Grid item xs={12} md={6}>
                    a
                </Grid>
                <Grid item xs={12} md={6}>
                    a
                </Grid>
                <Grid item xs={12} md={6}>
                    a
                </Grid>
                <Grid item xs={12} md={6}>
                    a
                </Grid>
                <Grid item xs={12} md={6}>
                    a
                </Grid>
            </Grid>
        </ContainerHero>
    );
}
