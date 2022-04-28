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

const NavItem = ({ name = "nav", href = "sd" }) => {
  return (
    <NextLink href={href}>
      <a>
        <Typography>{name}</Typography>
      </a>
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
          <IconButton
            sx={{ ml: 1 }}
            //onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {/*            
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )} 
            */}
            <Brightness4Icon />
            <ThemeModeToogle
              checked={mode === "system" ? prefersDarkMode : mode === "dark"}
              onChange={toggleColorMode}
            />
          </IconButton>
          <Button onClick={toggleColorMode}>asd</Button>
        </Container>
      </Toolbar>
    </Appbar>
  );
}
