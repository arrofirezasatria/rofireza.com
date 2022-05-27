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

import BlogPostCard from "../components/BlogPostCard";
import VideoCard from "../components/VideoCard";
import Subscribe from "../components/Subscribe";

import { allPosts, Post } from "contentlayer/generated";
import { useTheme } from "@mui/material/styles";
import { Chip } from "@mui/material";

const Boxxx = () => {
  const theme = useTheme();
  return (
    <Link
      href="/"
      sx={{
        textDecoration: "none",
        padding: "1rem",
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
          direction={{
            md: "row",
            xs: "column",
          }}
          sx={{
            justifyContent: "space-between",
            alignItems: {
              md: "center",
              xs: "flex-start",
            },
          }}
        >
          <Typography variant="h6" sx={{ lineHeight: 1 }}>
            Rust Is The Future of JavaScript adasd aadasd sdadadasdad dasdadadas
            sdadadas
          </Typography>
          {/* <Typography
                        sx={{
                            marginBottom: {
                                md: "0px",
                                xs: "12px",
                            },
                            color: theme.palette.text.secondary,
                        }}
                    >
                        224,120 views
                    </Typography> */}
        </Stack>
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
      </Box>
    </Link>
  );
};

export default function Home() {
  const theme = useTheme();

  return (
    <ContainerHero>
      <Box sx={{ pb: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={7}>
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
          <Grid item xs={5}>
            <Box></Box>
          </Grid>
        </Grid>
        <Stack direction={"row"} spacing={2} sx={{ mb: 3 }}>
          <Chip
            icon={<FaceIcon fontSize="small" />}
            clickable
            sx={{
              height: "28px",
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
            sx={{ height: "28px" }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="Next Js"
            clickable
            sx={{ height: "28px" }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="MUI"
            clickable
            sx={{ height: "28px" }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="Laravel"
            clickable
            sx={{ height: "28px" }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="React Native"
            clickable
            sx={{ height: "28px" }}
          />
        </Stack>
        {/* <Stack direction={"row"} spacing={2} sx={{ mb: 3 }}>
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="JPOP"
            sx={{ height: "28px" }}
          />
          <Chip
            icon={<FaceIcon fontSize="small" />}
            label="Dota 2"
            sx={{ height: "28px" }}
          />
        </Stack> */}

        {/* <Typography
          component="h3"
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          Recent Guestbook.
        </Typography> */}

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
        {/* <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <BlogPostCard />
                    </Grid>
                    <Grid item xs={4}>
                        <BlogPostCard />
                    </Grid>
                    <Grid item xs={4}>
                        <BlogPostCard />
                    </Grid>
                </Grid> */}
        <Typography
          component="h3"
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 2, marginTop: 4 }}
        >
          Recent Videos.
        </Typography>
        <Grid container spacing={5} sx={{ justifyContent: "space-between" }}>
          <Grid item md={6}>
            <Link href="https://www.google.com">
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "10px",
                  height: "189px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  overflow: "hidden",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                <Image src="/showcase/original/sidebar-mui.png" layout="fill" />
              </Box>
            </Link>

            <Link href="www.google.com" underline="hover">
              <Typography
                component="h5"
                sx={{
                  mt: "0.5rem",
                  mb: 1,
                  fontSize: "20px",
                  lineHeight: "1.2",
                }}
              >
                In incididunt voluptate ullamco adipisicing aliquip
              </Typography>
            </Link>
            <Typography sx={{ color: theme.palette.text.secondary }}>
              Duis veniam mollit consectetur duis aute mollit consequat nisi.
              mollit consectetur duis aute mollit
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                borderRadius: "10px",
                height: "189px",
                backgroundColor: "lightGray",
              }}
            >
              a
            </Box>
            <Typography
              component="h5"
              sx={{
                mt: 2,
                mb: 1,
                fontSize: "20px",
                lineHeight: "1.2",
              }}
            >
              In incididunt voluptate ullamco adipisicing aliquip
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>
              Duis veniam mollit consectetur duis aute mollit consequat nisi.
              mollit consectetur duis aute mollit
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                borderRadius: "10px",
                height: "189px",
                backgroundColor: "lightGray",
              }}
            >
              a
            </Box>
            <Typography
              component="h5"
              sx={{
                mt: 2,
                mb: 1,
                fontSize: "20px",
                lineHeight: "1.2",
              }}
            >
              In incididunt voluptate ullamco adipisicing aliquip
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>
              Duis veniam mollit consectetur duis aute mollit consequat nisi.
              mollit consectetur duis aute mollit
            </Typography>
          </Grid>
        </Grid>
        {/* <Box>
                    <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: "bold", mt: "64px", mb: "16px" }}
                    >
                        Learn REACT & MUI
                    </Typography>
                    <Typography sx={{ mt: "10px", mb: 2 }}>
                        Build and deploy a modern SaaS application using the
                        most popular open-source software. This course is 12
                        hours long and is completely live streamed.
                    </Typography>
                    <VideoCard
                        href="#"
                        title="MUI Guide in Indonesia"
                        index={1}
                        length={1}
                    />
                    <Divider />
                    <VideoCard
                        href="#"
                        title="Next JS Guide in Indonesia"
                        index={2}
                        length={1}
                    />
                    <Divider />
                    <VideoCard
                        href="#"
                        title="3 Month Mastering CSS, HTML, Javascript"
                        index={3}
                        length={1}
                    />
                    <Divider />
                    <Link href="#">
                        <Stack direction="row" sx={{ mt: "32px" }}>
                            <Typography>Watch all videos</Typography>
                            <ArrowRight />
                        </Stack>
                    </Link>
                </Box> */}
        {/* <Subscribe /> */}
      </Box>
    </ContainerHero>
  );
}
