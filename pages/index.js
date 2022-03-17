import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContainerHero from "../components/ContainerHero";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import BlogPostCard from "../components/BlogPostCard";

export default function Home() {
  return (
    <ContainerHero>
      <Box sx={{}}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Stack sx={{ paddingTop: 8 }}>
              <Typography component="h1" variant="h3" sx={{ fontWeight: 600 }}>
                Arrofi Reza S
              </Typography>
              <Typography
                component="h2"
                variant="subtitle1"
                sx={{ fontWeight: 500, marginBottom: 2 }}
              >
                Programmer E-Commerce at{" "}
              </Typography>
              <Typography>
                Helping developers build a faster web. Teaching about web
                development, serverless, and React / Next.js.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ marginTop: 8 }}>
              <Image
                alt="Lee Robinson"
                height={176}
                width={176}
                src="/avatar.jpg"
                className="rounded-full filter grayscale"
              />
            </Box>
          </Grid>
        </Grid>
        <Typography
          component="h3"
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          Featured Posts
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <BlogPostCard />
          </Grid>
          <Grid item xs={4}>
            <BlogPostCard />
          </Grid>
          <Grid item xs={4}>
            <BlogPostCard />
          </Grid>
        </Grid>
        <Typography component="h6" variant="h6">
          rofireza.io
        </Typography>
      </Box>
    </ContainerHero>
  );
}
