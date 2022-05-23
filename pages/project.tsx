import React from "react";
import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import { styled, useTheme } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { useTrail, animated as a } from "react-spring";

import ContainerHero from "components/ContainerHero";
import { Divider, Grid } from "@mui/material";
import prisma from "lib/prisma";

const ImageButton = styled((props) => <ButtonBase disableRipple {...props} />)(
    ({ theme }) => ({
        position: "relative",
        height: 200,
        [theme.breakpoints.down("sm")]: {
            width: "100% !important", // Overrides inline-style
            height: 100,
        },
        "&:hover, &.Mui-focusVisible": {
            zIndex: 1,
            "& .MuiImageBackdrop-root": {
                opacity: 0.15,
            },
            "& .MuiImageMarked-root": {
                opacity: 0,
            },
            "& .MuiTypography-root": {
                // border: "4px solid currentColor",
            },
        },
    })
);

const ImageBox = (props) => {
    const { children, data_showcase, ...rest } = props;

    return (
        <ImageButton
            focusRipple
            style={{
                width: "410px",
                height: "230.63px",
                borderRadius: "8px",
            }}
        >
            <Box
                component="span"
                sx={{
                    borderRadius: "8px",
                    width: "410px",
                    height: "230.63px",
                    boxSizing: "borderBox",
                    display: "block",
                    overflow: "hidden",
                    background: "none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    inset: "0px",
                }}
            >
                <Image
                    src={`/showcase/original/${data_showcase.image}`}
                    layout="fill"
                />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    display: [
                        "-webkit-box",
                        "-webkit-flex",
                        "-moz-box",
                        "-ms-flexbox",
                        "flex",
                    ],
                    WebkitBoxOrient: "vertical",
                    WebkitBoxDirection: "normal",
                    WebkitFlexDirection: "column",
                    MozBoxOrient: "vertical",
                    MozBoxDirection: "normal",
                    msFlexDirection: "column",
                    flexDirection: "column",
                    WebkitBoxAlign: "center",
                    WebkitAlignItems: "center",
                    MozBoxAlign: "center",
                    msFlexAlign: "center",
                    alignItems: "center",
                    WebkitBoxPack: "end",
                    WebkitJustifyContent: "flex-end",
                    MozBoxPack: "end",
                    msFlexPack: "end",
                    justifyContent: "flex-end",
                    height: "100%",
                    color: "white",
                    textShadow: "0 2px 20px rgba(0,0,0,.5)",
                    background: [
                        "-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.3))",
                        "-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.3))",
                        "-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.3))",
                        "linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,.3))",
                    ],
                    WebkitTransition: "opacity.2s ease",
                    MozTransition: "opacity.2s ease",
                    OTransition: "opacity.2s ease",
                    transition: "opacity.2s ease",
                    opacity: 0,
                    borderRadius: "8px",

                    "&:hover": {
                        opacity: 1,
                        "& > div": {
                            opacity: 1,
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        padding: "1rem",
                        background: "rgba(0,0,0,.8)",
                        textAlign: "center",
                        WebkitTransition: "opacity.6s ease",
                        MozTransition: "opacity.6s ease",
                        OTransition: "opacity.6s ease",
                        transition: "opacity.6s ease",
                        opacity: 0,
                        borderBottomLeftRadius: "8px",
                        borderBottomRightRadius: "8px",
                    }}
                >
                    <Typography>adada</Typography>
                </Box>
            </Box>
        </ImageButton>
    );
};

const StyledButton = (props) => {
    const theme = useTheme();
    const { checked, children, ...rest } = props;

    return (
        <Button
            {...rest}
            variant={checked && "contained"}
            sx={{
                minWidth: "90px",
            }}
        >
            <Typography
                component="h3"
                sx={{
                    fontSize: "16px",
                    color: theme.palette.text.secondary,
                    fontWeight: checked && "bold",
                    marginBottom: "1px",
                }}
            >
                {children}
            </Typography>
        </Button>
    );
};

export default function project({ data_showcase }) {
    const theme = useTheme();
    const [selectedCategory, setSelectedCategory] = React.useState("All");
    const [showcase, setShowcase] = React.useState(data_showcase);

    const setShowcaselist = () => {
        setShowcase(() => {
            return data_showcase.filter((el) => {
                if (selectedCategory !== "All") {
                    return el.category === selectedCategory;
                }
                return el.category;
            });
        });
    };

    React.useEffect(() => {
        setShowcaselist();
    }, [selectedCategory]);

    return (
        <ContainerHero variantContainer="project">
            <Head>
                <title>'judul'</title>
            </Head>
            <Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        component="h1"
                        variant="h3"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: "bold",
                        }}
                    >
                        SHOWCASE
                    </Typography>
                    <Typography>Sometimes Real and Sometimes Toy </Typography>
                </Box>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        pt: 3,
                        pb: "20px",
                        alignItems: "baseline",
                    }}
                >
                    {["All", "React", "Next Js", "MUI"].map(
                        (category, index) => {
                            return (
                                <StyledButton
                                    key={index}
                                    checked={selectedCategory === category}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                >
                                    {category}
                                </StyledButton>
                            );
                        }
                    )}
                </Stack>
                <Divider sx={{}} />
                <Box
                    sx={{
                        paddingTop: "10px",
                    }}
                >
                    <Grid
                        container
                        spacing={3}
                        sx={{
                            pt: "20px",
                            pb: "10px",
                        }}
                    >
                        {showcase.map((data, index) => {
                            return (
                                <Grid item md={6} key={index}>
                                    <ImageBox data_showcase={data} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        </ContainerHero>
    );
}

export async function getStaticProps() {
    const array_showcase = await prisma.showcase.findMany();

    const data_showcase = array_showcase.map((data) => ({
        id: data.id.toString(),
        name: data.name,
        alt: data.alt,
        image: data.image,
        image_small: data.smallimage,
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
