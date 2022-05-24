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

import BlogPostCard from "../components/BlogPostCard";
import VideoCard from "../components/VideoCard";
import Subscribe from "../components/Subscribe";

import { allPosts, Post } from "contentlayer/generated";
import { useTheme } from "@mui/material/styles";

export default function Home() {
    const theme = useTheme();

    return (
        <ContainerHero>
            <Box sx={{ pb: 8 }}>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Stack sx={{ paddingTop: 2 }}>
                            <Typography
                                component="h1"
                                variant="h3"
                                sx={{ fontWeight: 600 }}
                            >
                                Arrofi Reza S
                            </Typography>
                            <Typography
                                component="h2"
                                variant="subtitle1"
                                sx={{ fontWeight: 500, marginBottom: 2 }}
                            >
                                Programmer E-Commerce at
                            </Typography>
                            <Typography sx={{ mb: 6 }}>
                                Helping developers build a faster web. Teaching
                                about web development, serverless, and React /
                                Next.js.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Box></Box>
                    </Grid>
                </Grid>
                <Typography
                    component="h3"
                    variant="h5"
                    sx={{ fontWeight: "bold", marginBottom: 2 }}
                >
                    Recent Blog Post.
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
                <Typography
                    component="h3"
                    variant="h5"
                    sx={{ fontWeight: "bold", marginBottom: 2, marginTop: 4 }}
                >
                    Recent Videos.
                </Typography>
                <Grid
                    container
                    spacing={5}
                    sx={{ justifyContent: "space-between" }}
                >
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
                        <Typography
                            sx={{ color: theme.palette.text.secondary }}
                        >
                            Duis veniam mollit consectetur duis aute mollit
                            consequat nisi. mollit consectetur duis aute mollit
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
                        <Typography
                            sx={{ color: theme.palette.text.secondary }}
                        >
                            Duis veniam mollit consectetur duis aute mollit
                            consequat nisi. mollit consectetur duis aute mollit
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
                        <Typography
                            sx={{ color: theme.palette.text.secondary }}
                        >
                            Duis veniam mollit consectetur duis aute mollit
                            consequat nisi. mollit consectetur duis aute mollit
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
