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
import ThemeModeToggle from "./header/ThemeModeToogle";

const NavItem = ({ name = "nav", href = "sd" }) => {
    return (
        <NextLink href={href}>
            <a>
                <Typography>{name}</Typography>
            </a>
        </NextLink>
    );
};

export default function AppBar() {
    const changeTheme = useChangeTheme();
    const [mode, setMode] = React.useState<string | null>(null);
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const handleChangeThemeMode = (checked: boolean) => {
        const paletteMode = checked ? "dark" : "light";
        setMode(paletteMode);

        document.cookie = `paletteMode=${paletteMode};path=/;max-age=31536000`;
        changeTheme({ paletteMode });
    };

    return (
        <Appbar
            position="static"
            sx={{
                backgroundColor: "transparent !important",
                boxShadow: "none",
                color: "black",
            }}
        >
            <Toolbar sx={{ height: "88px" }}>
                <Container
                    maxWidth="md"
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                    }}
                >
                    <Stack direction="row" spacing={6} sx={{ flexGrow: 1 }}>
                        <NavItem name="Home" href="/" />
                        <NavItem name="Guestbook" href="/guestbook" />
                        <NavItem name="Dashboard" href="/dashboard" />
                        <NavItem name="Blog" href="/blog" />
                        <NavItem name="Snippets" href="snippets" />
                    </Stack>
                    <Button>a</Button>
                    <ThemeModeToggle
                        checked={
                            mode === "system"
                                ? prefersDarkMode
                                : mode === "dark"
                        }
                        onChange={handleChangeThemeMode}
                    />
                </Container>
            </Toolbar>
        </Appbar>
    );
}
