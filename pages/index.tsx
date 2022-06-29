import React from "react";
import Image from "next/image";
import Links from "next/link";
import ContainerHero from "../components/ContainerHero";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import FaceIcon from "@mui/icons-material/Face";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import { useTheme } from "@mui/material/styles";

import prisma from "lib/prisma";
import { allPosts } from ".contentlayer/generated";
import { pick } from "@contentlayer/utils";
//not in client side
import { getPlaiceholder } from "plaiceholder";

const Boxxx = ({ title, url, time_ago, summary, reading_time }) => {
    const theme = useTheme();
    return (
        <Links href={url} passHref>
            <Link
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
                            {title}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ color: theme.palette.text.secondary }}
                        >
                            <Typography>{time_ago}</Typography>
                            <Typography>&bull;</Typography>
                            <Typography>{reading_time}</Typography>
                        </Stack>
                        <Typography
                            sx={{
                                color: theme.palette.text.secondary,
                            }}
                        >
                            {summary}
                        </Typography>
                    </Stack>
                </Box>
            </Link>
        </Links>
    );
};

interface IData_showcase {
    id: string;
    name: string;
    alt: string;
    short_desc: string;
    image: string;
    small_image: string;
    blur_data_url: string;
    category: string;
    link1: string;
    link2: string;
}

interface IData_posts {
    title: string;
    date: string;
    summary: string;
    url: string;
    reading_time: any;
    time_ago: string;
    image: string;
}

interface data {
    data_showcase: Array<IData_showcase>;
    data_posts: Array<IData_posts>;
}

export default function Home({ data_showcase, data_posts }: data) {
    const theme = useTheme();

    const [innerWidth, setWidth] = React.useState<number>(0);
    const [innerHeight, setHeight] = React.useState<number>(0);

    React.useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    return (
        <ContainerHero>
            <Box sx={{ pb: 8 }}>
                <Grid
                    container
                    spacing={6}
                    direction={{ xs: "column-reverse", md: "row" }}
                    sx={{ mb: 6 }}
                >
                    <Grid item xs={12} md={7}>
                        <Stack sx={{ paddingTop: 2 }}>
                            <Typography
                                component="h1"
                                variant="h3"
                                sx={{ fontWeight: 700 }}
                            >
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
                                Helping developers build a faster web. Teaching
                                Web Development, Serverless, and React /
                                Next.js.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Avatar
                            src="/showcase/original/sidebar-mui.jpg"
                            sizes="large"
                            sx={{ width: 184, height: 184 }}
                        >
                            a
                        </Avatar>
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
                    {data_posts.map((post, index) => {
                        return (
                            <Boxxx
                                key={index}
                                title={post.title}
                                url={post.url}
                                time_ago={post.time_ago}
                                summary={post.summary}
                                reading_time={post.reading_time.text}
                            />
                        );
                    })}
                </Stack>
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
                    {data_showcase.map((data, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item md={6}>
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
                                                        transitionProperty:
                                                            "opacity",
                                                        transitionDuration:
                                                            "400ms",
                                                    },
                                                },
                                            }}
                                        >
                                            <Image
                                                src={`/showcase/original/${data.image}`}
                                                alt={data.alt}
                                                layout="fill"
                                                blurDataURL={data.blur_data_url}
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
                                                    background:
                                                        "rgba(0,0,0,0.36)",
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
                                    <Typography
                                        sx={{
                                            color: theme.palette.text.secondary,
                                        }}
                                    >
                                        {data.short_desc}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                        );
                    })}
                </Grid>
            </Box>
        </ContainerHero>
    );
}

const getPlaiceholderBase64 = async (image_adress: string) => {
    const { base64 } = await getPlaiceholder(
        `/showcase/original/${image_adress}`
    );

    return base64;
};

export async function getStaticProps() {
    const array_showcase = await prisma.showcase.findMany({
        take: 4,
        orderBy: [
            {
                id: "asc",
            },
        ],
    });

    const data_posts = allPosts.map((post) =>
        pick(post, [
            "title",
            "date",
            "summary",
            "url",
            "reading_time",
            "time_ago",
            "image",
        ])
    );

    const showcase = array_showcase.map(async (data) => {
        return {
            id: data.id.toString(),
            name: data.name,
            alt: data.alt,
            short_desc: data.short_desc,
            image: data.image,
            small_image: data.small_image,
            blur_data_url: await getPlaiceholderBase64(data.image),
            category: data.category,
            link1: data.link1,
            link2: data.link2,
        };
    });

    const resolved = await Promise.all(showcase);
    const data_showcase = await Promise.all(resolved);

    return {
        props: {
            data_showcase,
            data_posts,
        },
        revalidate: 180,
    };
}
