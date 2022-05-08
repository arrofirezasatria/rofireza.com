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

import { useContext } from "react";
import ThemeModeToogle from "./header/ThemeModeToogle";

import { useTheme } from "../modules/ThemeContext";
import { useTheme as useMyTheme } from "@mui/material/styles";
import { blueDark, blue } from "../modules/ThemeContext";

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
                    "&:hover": {
                        backgroundColor: blueDark[100],
                        border: "1px solid #c5daf1",
                        boxShadow: "3px 3px 3px -10px rgba(0,0,0,0.4) inset",
                    },
                }}
            >
                <Typography
                    component="span"
                    sx={{
                        fontWeight: 400,
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
        console.log(darkTheme);
    }, [darkTheme]);

    const handleChangeThemeMode = (checked: boolean) => {
        const paletteMode = checked ? "dark" : "light";
    };

    return (
        <Appbar
            position="static"
            sx={{
                backgroundColor: "transparent !important",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{}}>
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
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <NavItem name="Home" href="/" />
                        <NavItem name="Guestbook" href="/guestbook" />
                        <NavItem name="Dashboard" href="/dashboard" />
                        <NavItem name="Blog" href="/blog" />
                    </Stack>
                    <Stack sx={{ alignItems: "center" }}>
                        <IconButton onClick={toggleColorMode}>
                            {darkTheme === true ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                    </Stack>
                </Container>
            </Toolbar>
        </Appbar>
    );
}
