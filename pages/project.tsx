import React from "react";
import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import { styled, useTheme } from "@mui/material/styles";

import ContainerHero from "components/ContainerHero";
import { Grid } from "@mui/material";

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
        image: "firstImage.jpg",
        smallImage: "smallSecondImage.jpg",
        category: "react",
    },
    {
        name: "Buttonbar",
        image: "secondImage.jpg",
        smallImage: "smallSecondImage.jpg",
        category: "nextjs",
    },
    {
        name: "adadad",
        image: "secondImage.jpg",
        smallImage: "smallSecondImage.jpg",
        category: "mui",
    },
    {
        name: "Buttonbar",
        image: "secondImage.jpg",
        smallImage: "smallSecondImage.jpg",
        category: "react",
    },
    {
        name: "Buttonbar",
        image: "secondImage.jpg",
        smallImage: "smallSecondImage.jpg",
        category: "nextjs",
    },
];

// const ButtonStyled = styled((props) => <Button {...props} />)(({ theme }) => ({
//     backgroundColor: checked,
// }));

const ImageBox = (props) => {
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

const StyledButton = (props) => {
    const theme = useTheme();
    const { checked, children, ...rest } = props;

    return (
        <Button
            {...rest}
            variant={checked && "contained"}
            sx={{ minWidth: "90px" }}
            // sx={{ color: props.checked === true ? "red" : "green" }}
        >
            <Typography
                component="h3"
                sx={{
                    fontSize: "16px",
                    color: theme.palette.text.secondary,
                    fontWeight: checked && "bold",
                }}
            >
                {children}
            </Typography>
        </Button>
    );
};

export default function project() {
    // const [showCase, setShowCase] = React.useState(imageCategory);
    const [selectedCategory, setSelectedCategory] =
        React.useState<string>("All");

    // React.useEffect(() => {}, [showCase]);

    const changeCategory = (params: string = "All") => {
        console.log(params);
        setSelectedCategory(params);
    };

    return (
        <ContainerHero variantContainer="nonBlog">
            <Head>
                <title>'judul'</title>
            </Head>
            <Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography component="h1" variant="h4">
                        SHOWCASE
                    </Typography>
                    <Typography>Sometimes Real and Toy </Typography>
                </Box>

                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: 2,
                        alignItems: "baseline",
                    }}
                >
                    <StyledButton
                        checked={selectedCategory === "All"}
                        onClick={() => setSelectedCategory("All")}
                    >
                        All
                    </StyledButton>
                    <StyledButton
                        checked={selectedCategory === "React"}
                        onClick={() => setSelectedCategory("React")}
                    >
                        React
                    </StyledButton>
                    <StyledButton
                        checked={selectedCategory === "NextJS"}
                        onClick={() => setSelectedCategory("NextJS")}
                    >
                        Next JS
                    </StyledButton>
                    <StyledButton
                        checked={selectedCategory === "MUI"}
                        onClick={() => setSelectedCategory("MUI")}
                    >
                        MUI
                    </StyledButton>
                </Stack>
                <Box sx={{ height: "800px" }}>
                    <Grid container spacing={2}>
                        {imageCategory.map((index) => {
                            return (
                                <Grid item md={6}>
                                    <ImageBox />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        </ContainerHero>
    );
}
