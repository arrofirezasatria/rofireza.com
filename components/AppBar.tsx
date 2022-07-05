import * as React from "react";
import Appbar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext } from "react";
import ThemeModeToogle from "./header/ThemeModeToogle";

import { useTheme } from "../modules/ThemeContext";
import { useTheme as useMyTheme, alpha } from "@mui/material/styles";
import { blueDark, blue, grey } from "../modules/ThemeContext";

const NavItem = ({ name = "nav", href = "sd" }) => {
    const theme = useMyTheme();
    return (
        <NextLink href={href}>
            <Button
                component={Link}
                sx={{
                    padding: "6px 10px",
                    minWidth: 0,
                    border: "1px solid transparent",
                    color:
                        theme.palette.mode === "dark"
                            ? grey[300]
                            : blueDark[500],
                    fonfFamily: "Rubik",

                    "&:hover": {
                        color: theme.palette.mode === "dark" && blueDark[500],
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? grey[300]
                                : blueDark[100],
                        border:
                            theme.palette.mode === "light"
                                ? "1px solid #c5daf1"
                                : "1px solid transparent",
                        boxShadow: "3px 3px 3px -10px rgba(0,0,0,0.4) inset",
                    },
                }}
            >
                <Typography
                    component="span"
                    sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        fontFamily: "Rubik",
                    }}
                >
                    {name}
                </Typography>
            </Button>
        </NextLink>
    );
};

/* const konteks = React.createContext(); */

export default function AppBar() {
    /*  const colorMode = useContext(konteks); */

    const [mode, setoMde] = React.useState<string | null>(null);
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const { darkTheme, toggleColorMode } = useTheme();

    React.useEffect(() => {
        // console.log(darkTheme);
    }, [darkTheme]);

    const handleChangeThemeMode = (checked: boolean) => {
        const paletteMode = checked ? "dark" : "light";
    };

    const theme = useMyTheme();

    return (
        <Appbar
            position="static"
            sx={{
                position: "sticky",
                top: 0,
                transition: theme.transitions.create("top"),
                zIndex: theme.zIndex.appBar,
                backdropFilter: "blur(20px)",
                boxShadow: `inset 0px -1px 1px ${
                    theme.palette.mode === "dark"
                        ? blueDark[700]
                        : theme.palette.grey[100]
                }`,
                backgroundColor:
                    theme.palette.mode === "dark"
                        ? alpha(blueDark[900], 0.5)
                        : "rgba(255,255,255,0.5)",
            }}
        >
            <Toolbar
                sx={{
                    px: { xs: 0 },
                }}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{
                            flexGrow: 1,
                            alignItems: "center",
                            alignContent: "center",
                            display: {
                                xs: "flex",
                                md: "flex",
                            },
                        }}
                    >
                        <NavItem name="Rofi." href="/" />
                        {/* <NavItem name="Dashboard" href="/dashboard" /> */}
                        {/* <NavItem name="Blog" href="/blog" />
                        <NavItem name="Project" href="/project" /> */}
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center" }}
                    >
                        <IconButton onClick={toggleColorMode}>
                            {darkTheme === true ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                        {/* <IconButton>
                            <GitHubIcon />
                        </IconButton> */}
                    </Stack>
                </Container>
            </Toolbar>
        </Appbar>
    );
}
