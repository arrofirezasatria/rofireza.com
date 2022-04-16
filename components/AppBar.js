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
import { signIn, signOut, useSession } from "next-auth/react";

const NavItem = ({ name = "nav", href = "sd" }) => {
    return (
        <NextLink href={href}>
            <a size="small" variant="text">
                <Typography>{name}</Typography>
            </a>
        </NextLink>
    );
};

export default function AppBar() {
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
                    <Button onClick={() => signOut()}>a</Button>
                </Container>
            </Toolbar>
        </Appbar>
    );
}
