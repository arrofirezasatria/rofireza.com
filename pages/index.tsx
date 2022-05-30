import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContainerHero from "../components/ContainerHero";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import ArrowRight from "@mui/icons-material/ArrowRightAlt";
import Divider from "@mui/material/Divider";
import FaceIcon from "@mui/icons-material/face";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";

import BlogPostCard from "../components/BlogPostCard";
import VideoCard from "../components/VideoCard";
import Subscribe from "../components/Subscribe";

import { allPosts, Post } from "contentlayer/generated";
import { useTheme } from "@mui/material/styles";
import { Chip } from "@mui/material";
import prisma from "lib/prisma";
import { PlayCircleRounded } from "@mui/icons-material";

const Boxxx = () => {
  const theme = useTheme();
  return (
    <Link
      href="/"
      sx={{
        textDecoration: "none",
        padding: {
          xs: "1rem 1rem 1rem 0rem",
          md: "1rem 1rem 1rem 1.5rem",
        },
        "&:hover": {
          // border: "1px solid lightGray",
          backgroundColor: "lightgray",
          borderRadius: "10px",
          transform: "scale(1.025, 1.02)",
          transitionDuration: "300ms",
          transitionProperty: "all",
          transitionTimingFunction: "300ms",
        },
      }}
    >
      <Box>
        <Stack
          spacing={0.5}
          sx={{
            justifyContent: "space-between",
            alignItems: {
              md: "flex-start",
              xs: "flex-start",
            },
          }}
        >
          <Typography variant="h6" sx={{ lineHeight: 1 }}>
            Rust Is The Future of JavaScript adasd aadasd sdadadasdad dasdadadas
            sdadadas
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ color: theme.palette.text.secondary }}
          >
            <Typography>3 months ago</Typography>
            <Typography>&bull;</Typography>
            <Typography>3 min read</Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            Why is Rust being used to replace parts of the JavaScript web
            ecosystem like minification
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default function Home({ data_showcase }) {
  const theme = useTheme();

  const [innerWidth, setWidth] = React.useState(0);
  const [innerHeight, setHeight] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <ContainerHero>
      <Box sx={{ pb: 8 }}>
        <Grid
          container
          spacing={6}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} md={7}>
            <Stack sx={{ paddingTop: 2 }}>
              <Typography component="h1" variant="h3" sx={{ fontWeight: 700 }}>
                Arrofi Reza S.
              </Typography>
              <Typography
                component="h2"
                variant="subtitle1"
                sx={{ fontWeight: 500, marginBottom: 2 }}
              >
                Programmer E-Commerce at
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Helping developers build a faster web. Teaching Web Development,
                Serverless, and React / Next.js.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box></Box>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", flexWrap: "wrap", mb: 1 }}>
          <Chip
            icon={<FaceIcon fontSize="small" />}
            clickable
            sx={{
              height: "28px",
              my: 1,
              "& .MuiChip-label": {
                paddingLeft: "10.7px",
                paddingRight: 0,
              },
            }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="React"
            clickable
            sx={{ height: "28px", marginLeft: "16px", my: 1 }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="Next Js"
            clickable
            sx={{ height: "28px", marginLeft: "16px", my: 1 }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="MUI"
            clickable
            sx={{ height: "28px", marginLeft: "16px", my: 1 }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="Laravel"
            clickable
            sx={{
              height: "28px",
              marginLeft: { md: "16px", xs: "0" },
              my: 1,
            }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="React Native"
            clickable
            sx={{ height: "28px", marginLeft: "16px", my: 1 }}
          />
        </Box>

        <Box
          sx={{
            backgroundColor: "lightGray",
            height: "100px",
            marginBottom: 5,
            borderRadius: "8px",
          }}
        ></Box>
        <Typography
          component="h3"
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 1 }}
        >
          Recent Blog Post.
        </Typography>
        <Stack spacing={0}>
          <Boxxx />
          <Boxxx />
          <Boxxx />
        </Stack>
        <Typography
          component="h3"
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 2, marginTop: 4 }}
        >
          Recent Videos.
        </Typography>
        <Grid container spacing={5} sx={{ justifyContent: "space-between" }}>
          {data_showcase.map((data, index) => {
            return (
              <Grid item md={6} key={index}>
                <Link href={data.link1}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "10px",
                      height: {
                        xs: `calc( ${innerWidth}px * ( 9 / 16 ) - 20px )`,
                        md: "189px",
                      },
                      overflow: "hidden",
                      "&:hover": {
                        "& div": {
                          opacity: 1,
                          transitionProperty: "opacity",
                          transitionDuration: "400ms",
                        },
                      },
                    }}
                  >
                    <Image
                      src={`/showcase/original/${data.image}`}
                      layout="fill"
                      blurDataURL="/showacase/low_res/sidebar-mui-lowres.jpg"
                      placeholder="blur"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        overflow: "hidden",
                        opacity: 0,
                        background: "rgba(0,0,0,0.36)",
                      }}
                    >
                      <PlayCircleRoundedIcon fontSize="large" />
                    </Box>
                  </Box>
                </Link>

                <Link href={data.link1} underline="hover">
                  <Typography
                    component="h5"
                    sx={{
                      mt: "0.5rem",
                      mb: 1,
                      fontSize: "20px",
                      lineHeight: "1.2",
                    }}
                  >
                    {data.name}
                  </Typography>
                </Link>
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  {data.short_desc}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        {/* <Subscribe /> */}
      </Box>
    </ContainerHero>
  );
}

export async function getStaticProps() {
  const array_showcase = await prisma.showcase.findMany({
    take: 4,
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  console.log(array_showcase);

  const data_showcase = array_showcase.map((data) => ({
    id: data.id.toString(),
    name: data.name,
    alt: data.alt,
    short_desc: data.short_desc,
    image: data.image,
    small_image: data.small_image,
    category: data.category,
    link1: data.link1,
    link2: data.link2,
  }));

  return {
    props: {
      data_showcase,
    },
    revalidate: 360,
  };
}
