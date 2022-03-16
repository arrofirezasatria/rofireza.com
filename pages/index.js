import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContainerHero from "../components/ContainerHero";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <ContainerHero>
      <Box sx={{}}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Stack>
              <Typography component="h1" variant="h6">
                Arrofi Reza Satria
              </Typography>
              <Typography>Director of Developer Relations</Typography>
              <Typography>
                Helping developers build a faster web. Teaching about web
                development, serverless, and React / Next.js.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Image
              alt="Lee Robinson"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </Grid>
        </Grid>

        <Typography component="h6" variant="h6">
          rofireza.io
        </Typography>
      </Box>
    </ContainerHero>
  );
}
