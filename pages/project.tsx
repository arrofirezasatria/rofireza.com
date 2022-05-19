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
import { Category } from "@mui/icons-material";

// interface showCaseDataInterface {
//     name: string;
//     image: string;
//     smallImage: string;
//     category: string;
// }

// const ListShowCase = (data: Array<showCaseDataInterface>) => {
//     return (
//         <Box>
//             {data.map(() => {
//                 return <Box>a</Box>;
//             })}
//         </Box>
//     );
// };

// const ListShowCaseComponent = (params) => {
//     const { data, ...rest } = params;
//     return <Box>{}</Box>;
// };

const imageCategory = [
    {
        name: "Sidebar",
        image: "firstImage.png",
        smallImage: "smallSecondImage.png",
        category: "react",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "nextjs",
    },
    {
        name: "adadad",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "mui",
    },
    {
        name: "Buttonbar",
        image: "firstImage.png",
        smallImage: "smallSecondImage.png",
        category: "react",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "nextjs",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "nextjs",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "nextjs",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "nextjs",
    },
    {
        name: "adadad",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "mui",
    },
    {
        name: "Buttonbar",
        image: "firstImage.png",
        smallImage: "smallSecondImage.png",
        category: "react",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "nextjs",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "nextjs",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "nextjs",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "mui",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "mui",
    },
    {
        name: "Buttonbar",
        image: "secondImage.png",
        smallImage: "smallSecondImage.png",
        category: "mui",
    },
];

// const ButtonStyled = styled((props) => <Button {...props} />)(({ theme }) => ({
//     backgroundColor: checked,
// }));

const ImageBoxx = (props) => {
    const { children, ...rest } = props;

    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: "7px",
                overflow: "hidden",
                width: "inherit",
                height: "230.63px",
                backgroundColor: "transparent",
                cursor: "pointer",
            }}
        >
            <Image src="/Capture1.PNG" layout="fill" />
        </Box>
    );
};

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
    const { children, data, ...rest } = props;

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
                <Image src={`/${data.image}`} layout="fill" />
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
            // sx={{ color: props.checked === true ? "red" : "green" }}
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

export default function project() {
    const theme = useTheme();
    const [toggle, set] = React.useState(true);
    const config = { mass: 5, tension: 2000, friction: 200 };

    // const [showCase, setShowCase] = React.useState(imageCategory);
    const [selectedCategory, setSelectedCategory] = React.useState("all");

    const [image, setImage] = React.useState(imageCategory);

    // React.useEffect(() => {}, [showCase]);

    const setImageList = () => {
        setImage(() => {
            return imageCategory.filter(function (el) {
                if (selectedCategory !== "all") {
                    return el.category === selectedCategory;
                }
                return el.category;
            });
        });
    };

    React.useEffect(() => {
        setImageList();
        console.log(image);
    }, [selectedCategory]);

    const changeCategory = (params: string = "All") => {
        console.log(params);
        setSelectedCategory(params);
    };

    const trail = useTrail(image.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

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
                    <StyledButton
                        checked={selectedCategory === "all"}
                        onClick={() => setSelectedCategory("all")}
                    >
                        All
                    </StyledButton>
                    <StyledButton
                        checked={selectedCategory === "react"}
                        onClick={() => setSelectedCategory("react")}
                    >
                        React
                    </StyledButton>
                    <StyledButton
                        checked={selectedCategory === "nextjs"}
                        onClick={() => setSelectedCategory("nextjs")}
                    >
                        Next JS
                    </StyledButton>
                    <StyledButton
                        checked={selectedCategory === "mui"}
                        onClick={() => setSelectedCategory("mui")}
                    >
                        MUI
                    </StyledButton>
                </Stack>
                <Divider sx={{}} />
                <Box
                    sx={{
                        paddingTop: "10px",
                    }}
                >
                    <Grid
                        container
                        rowSpacing={3}
                        columnSpacing={3}
                        sx={{
                            pt: "20px",
                            pb: "10px",
                        }}
                    >
                        {/* {imageCategory
                            .filter(function (el) {
                                if (selectedCategory !== "all") {
                                    return el.category === selectedCategory;
                                }
                                return el.category;
                            })
                            .map((index) => {
                                return (
                                    <Grid item md={6} key={index}>
                                        <ImageBox />
                                    </Grid>
                                );
                            })} */}

                        {trail.map(({ x, height, ...rest }, index) => (
                            <Grid item md={6} key={index}>
                                <a.div
                                    className="trails-text"
                                    style={{
                                        ...rest,
                                        transform: x.interpolate(
                                            (x) => `translate3d(0,${x}px,0)`
                                        ),
                                    }}
                                >
                                    <ImageBox data={image[index]} />
                                </a.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </ContainerHero>
    );
}
