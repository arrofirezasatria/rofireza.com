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
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import ReactIcon from "../public/logo/react.svg";

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
                    transition: "all .3s ease",
                    borderRadius: "10px",
                    "&:hover": {
                        // border: "1px solid lightGray",
                        backgroundColor: "black",
                        transform: "scale(1.025, 1.025)",
                        // color: "red",
                        // transitionDuration: "300ms",
                        // transitionProperty: "all",
                        // transitionTimingFunction: "300ms",
                        // color: "red !important",
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
                            component="p"
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
                        // icon={<FaceIcon fontSize="small" />}
                        icon={
                            <SvgIcon sx={{ width: "18px", height: "18px" }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-11.5 -10.23174 23 20.46348"
                                >
                                    <title>React Logo</title>
                                    <circle
                                        cx="0"
                                        cy="0"
                                        r="2.05"
                                        fill="#61dafb"
                                    />
                                    <g
                                        stroke="#61dafb"
                                        strokeWidth="1"
                                        fill="none"
                                    >
                                        <ellipse rx="11" ry="4.2" />
                                        <ellipse
                                            rx="11"
                                            ry="4.2"
                                            transform="rotate(60)"
                                        />
                                        <ellipse
                                            rx="11"
                                            ry="4.2"
                                            transform="rotate(120)"
                                        />
                                    </g>
                                </svg>
                            </SvgIcon>
                        }
                        label="React"
                        clickable
                        sx={{ height: "28px", marginLeft: "16px", my: 1 }}
                    />
                    <Chip
                        icon={
                            <SvgIcon
                                sx={{
                                    width: "18px",
                                    height: "18px",
                                }}
                            >
                                <svg
                                    viewBox=".5 -.2 1023 1024.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#000"
                                        d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
                                    />
                                    <path
                                        fill="#000"
                                        d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"
                                    />
                                </svg>
                            </SvgIcon>
                        }
                        label="Next Js"
                        clickable
                        sx={{ height: "28px", marginLeft: "16px", my: 1 }}
                    />
                    <Chip
                        icon={
                            <SvgIcon
                                sx={{
                                    paddingLeft: "3px",
                                    width: "19px",
                                    height: "16px",
                                }}
                            >
                                <svg
                                    viewBox="0 0 600 476.30000000000007"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z"
                                        fill="#00b0ff"
                                    />
                                    <path
                                        d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                                        fill="#0081cb"
                                    />
                                    <path
                                        d="M225 303.1v86.6l150 86.6v-86.6z"
                                        fill="#00b0ff"
                                    />
                                    <path
                                        d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z"
                                        fill="#0081cb"
                                    />
                                </svg>
                            </SvgIcon>
                        }
                        label="MUI"
                        clickable
                        sx={{ height: "28px", marginLeft: "16px", my: 1 }}
                    />
                    <Chip
                        icon={
                            <SvgIcon
                                sx={{
                                    paddingLeft: "3px",
                                    width: "19px",
                                    height: "16px",
                                }}
                            >
                                <svg
                                    viewBox="0 -.11376601 49.74245785 51.31690859"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z"
                                        fill="#ff2d20"
                                    />
                                </svg>
                            </SvgIcon>
                        }
                        label="Laravel"
                        clickable
                        sx={{
                            height: "28px",
                            marginLeft: { md: "16px", xs: "0" },
                            my: 1,
                        }}
                    />
                    <Chip
                        icon={
                            <SvgIcon
                                sx={{
                                    paddingLeft: "3px",
                                    width: "19px",
                                    height: "16px",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16.933 16.933"
                                >
                                    <path
                                        d="M9.97.033c-.122 0-.236.026-.34.06.223.15.345.345.407.568.004.03.013.052.017.083s.01.052.01.08c.018.385-.1.433-.184.66-.127.293-.092.608.06.86a.52.52 0 0 0 .052.096c-.166-1.106.757-1.273.927-1.618.013-.302-.236-.503-.433-.643-.188-.114-.36-.15-.516-.15zm1.39.25c-.018.1-.004.074-.01.127l-.01.114-.03.105c-.01.035-.022.07-.035.105l-.048.1c-.013.018-.022.035-.035.052l-.026.04-.066.087c-.026.026-.048.057-.08.08s-.052.052-.083.074c-.092.07-.197.122-.293.188-.03.022-.06.04-.087.066a.64.64 0 0 0-.083.07c-.03.026-.052.052-.08.083s-.048.057-.066.087l-.06.092-.048.1-.035.1-.03.11c-.004.018-.004.04-.01.057s-.004.035-.01.052l-.004.11c0 .026 0 .052.004.08 0 .035.004.07.013.11s.013.07.022.105l.035.105c.01.022.022.044.03.06l-1.006-.39-.507-.13-.276-.066a8.12 8.12 0 0 0-.796-.118c-.01 0-.013-.004-.022-.004l-.783-.04-.573.022c-.267.018-.534.052-.8.096l-.197.035-.394.087-.197.052-.188.083-.144.066c-.01.004-.018.004-.022.01l-.122.06c-.013.004-.022.01-.03.013l-.136.07c-.03.013-.06.03-.087.044-.013.01-.03.017-.04.022l-.114.066a1.1 1.1 0 0 0-.105.066l-.087.06-.096.07-.074.06c-.01.004-.018.013-.026.018l-.066.057c-.004.01-.013.013-.018.018l-.08.074-.087.083-.074.08c-.01.01-.022.018-.03.026a1.23 1.23 0 0 1-.074.079c-.004.01-.013.013-.018.022l-.1.105-.236.227c-.08.07-.162.136-.245.192l-.262.166c-.087.048-.18.092-.276.13a3.15 3.15 0 0 1-.284.105c-.184.04-.372.114-.534.127-.035 0-.074.01-.11.013l-.11.026-.105.04a1.12 1.12 0 0 0-.105.048c-.03.022-.066.04-.096.06s-.06.048-.087.074-.06.052-.087.08l-.074.087c-.022.035-.048.066-.066.1a.77.77 0 0 0-.061.101l-.048.114-.04.114-.022.105c-.013.052-.013.105-.018.13S0 5.635 0 5.666a.25.25 0 0 0 .004.057c.004.03.01.057.018.083l.03.08c.013.03.03.057.048.083l.057.08.074.07a.64.64 0 0 0 .083.07c.105.092.13.122.267.192.022.013.044.022.07.035.013.013.013.017.018.026.004.035.013.07.022.105a.59.59 0 0 0 .035.105l.035.08c.004.01.01.018.013.022l.052.096.066.092.074.083c.026.026.052.048.083.074l.087.066c.03.022.06.04.096.057a.71.71 0 0 0 .101.048c.026.013.057.022.087.03s.057.018.074.022c-.013.236-.018.46.018.538.04.087.232-.18.424-.485-.026.302-.044.656 0 .76s.31-.232.538-.608c3.1-.717 5.93 1.426 6.227 4.452-.057-.472-.638-.735-.905-.67-.13.324-.354.74-.713.997.03-.29.017-.586-.044-.875a2.83 2.83 0 0 1-.542 1.102c-.415.03-.83-.17-1.05-.472-.018-.013-.022-.04-.035-.057l-.035-.092c-.013-.03-.022-.06-.026-.092s-.004-.06-.004-.096v-.066c.004-.03.013-.06.022-.092l.03-.092c.018-.03.03-.06.052-.092.074-.2.074-.38-.06-.48-.026-.018-.052-.03-.083-.044-.018-.004-.04-.013-.057-.018l-.035-.013-.092-.022a.33.33 0 0 0-.092-.013.71.71 0 0 0-.096-.009c-.022 0-.044.004-.066.004a.34.34 0 0 0-.096.013l-.092.017-.092.03-.087.04-.083.044c-1.02.665-.41 2.22.284 2.672-.262.048-.53.105-.603.162.18.122.376.22.582.302l.708.2c.363.08.73.105 1.102.083a4.16 4.16 0 0 0 3.813-3.551l.026.114.04.245.018.118.01.13.01.144v.07c0 .022.004.048.004.07s-.004.052-.004.08v.06c0 .03-.004.057-.004.087 0 .017 0 .035-.004.057l-.004.096c-.004.013-.004.026-.004.04l-.013.1c0 .013 0 .026-.004.04l-.017.127v.01l-.026.122-.026.13-.035.136-.035.136-.044.14-.096.254-.052.127-.06.122c-.004.013-.01.022-.013.03-.293.586-.713 1.09-1.238 1.482-.035.022-.07.048-.105.074-.01.01-.022.013-.03.022l-.096.066.013.026h.004l.184-.026h.004l.34-.06c.03-.004.066-.013.096-.022l.06-.013.092-.017.08-.022c.437-.105.86-.25 1.268-.42-.695.95-1.627 1.714-2.716 2.217.503-.035 1.006-.118 1.49-.258 1.762-.52 3.245-1.705 4.133-3.302a6.98 6.98 0 0 1-1.176 2.812c.424-.28.813-.603 1.168-.97a6.93 6.93 0 0 0 1.841-3.717c.15.69.192 1.404.127 2.108 3.157-4.404.262-8.97-.95-10.172-.004-.01-.01-.013-.01-.022-.01.052-.013.105-.017.157-.013.1-.026.197-.044.293s-.048.192-.074.29-.066.188-.105.28-.083.18-.13.267a2.98 2.98 0 0 1-.157.249c-.057.083-.118.162-.18.236a3.27 3.27 0 0 1-.206.219c-.044.04-.083.074-.127.11l-.1.087a2.44 2.44 0 0 1-.245.171 3.03 3.03 0 0 1-.258.149c-.092.044-.184.083-.276.122a3.08 3.08 0 0 1-.284.092c-.096.026-.197.048-.293.066s-.2.026-.297.035c-.07.004-.14.01-.2.01-.1 0-.2-.01-.297-.018s-.2-.022-.298-.044a2.21 2.21 0 0 1-.293-.074h-.004c.096-.01.192-.018.29-.035s.197-.04.293-.066.192-.057.284-.092.188-.08.276-.122a3.06 3.06 0 0 0 .262-.144c.083-.057.166-.114.245-.175a2.39 2.39 0 0 0 .223-.197c.074-.066.14-.14.206-.214s.127-.157.184-.236c.01-.013.018-.03.026-.044l.127-.2c.048-.087.092-.175.13-.267s.074-.184.105-.28.052-.188.074-.284.035-.197.044-.293.017-.2.017-.297c0-.07-.004-.14-.01-.2-.01-.1-.022-.197-.035-.293a3.2 3.2 0 0 0-.066-.293c-.03-.092-.06-.188-.096-.28s-.08-.184-.122-.27-.096-.175-.15-.258-.114-.162-.175-.24l-.2-.223a2.73 2.73 0 0 0-.114-.109 8.05 8.05 0 0 0-.608-.429c-.03-.017-.057-.03-.087-.044-.144-.092-.28-.14-.415-.184z"
                                        fill="#ea2845"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </SvgIcon>
                        }
                        label="Nest Js"
                        clickable
                        sx={{
                            height: "28px",
                            marginLeft: { md: "16px", xs: "0" },
                            my: 1,
                        }}
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
                    sx={{
                        fontWeight: "bold",
                        marginBottom: 1,
                        marginTop: "40px",
                    }}
                >
                    Recent Tech.
                </Typography>

                <Grid container>
                    <Grid item md={4}>
                        <Box
                            sx={{
                                width: "auto",
                                height: "150px",
                                backgroundColor: "lightgray",
                                borderRadius: "16px",
                            }}
                        ></Box>
                    </Grid>
                    <Grid item md={8}>
                        b
                    </Grid>
                    <Grid item md={8}>
                        a
                    </Grid>
                    <Grid item md={4}>
                        <Box
                            sx={{
                                width: "auto",
                                height: "150px",
                                backgroundColor: "lightgray",
                                borderRadius: "16px",
                            }}
                        ></Box>
                    </Grid>
                </Grid>

                <Typography
                    component="h3"
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: 1,
                        marginTop: "40px",
                    }}
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
