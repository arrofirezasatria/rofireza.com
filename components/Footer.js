import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { alpha, styled } from "@mui/material/styles";
import { IconButton, Typography, Avatar } from "@mui/material";
import { grey, blueDark, blue } from "../modules/ThemeContext";

import EmailSubscriber from "./footer/EmailSubscriber";
import EmailIcon from "@mui/icons-material/Email";

import Links from "next/link";

const StyledLink = styled((props) => <Link underline="none" {...props} />)(
  ({ theme }) => ({})
);

export default function Footer() {
  return (
    <Container component="footer" maxWidth="md" sx={{ pb: 0, pt: 0 }}>
      {/* <Divider sx={{ mb: "40px" }} />
            <Grid
                container
                spacing={2}
                direction={{
                    xs: "column",
                    md: "row",
                }}
            >
                <Grid item xs={7}>
                    <Avatar sx={{ width: "32px", height: "32px" }}>A</Avatar>
                    <Box sx={{ ml: { md: 6, xs: 0 }, mt: 0.5 }}>
                        <Box sx={{ height: "50px" }}>
                            <Typography
                                sx={{
                                    color: blueDark[100],
                                    fontSize: "14px",
                                    fontWeight: 600,
                                }}
                            >
                                Reach me on ,
                            </Typography>
                        </Box>

                        <Stack direction="row" spacing={1}>
                            <IconButton
                                sx={{
                                    height: "14px",
                                    width: "14px",
                                }}
                            >
                                <EmailIcon />
                            </IconButton>
                            <IconButton
                                sx={{
                                    height: "14px",
                                    width: "14px",
                                }}
                            >
                                <EmailIcon />
                            </IconButton>
                            <IconButton
                                sx={{
                                    height: "14px",
                                    width: "14px",
                                }}
                            >
                                <EmailIcon />
                            </IconButton>
                        </Stack>

                        <Box sx={{ height: "100px" }}>
                            <Typography
                                sx={{
                                    color: blueDark[300],
                                    fontSize: "14px",
                                }}
                            >
                                Join our newsletter for regular updates. No spam
                                ever.
                            </Typography>
                            <EmailSubscriber />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography
                                fontWeight="bold"
                                variant="body2"
                                sx={{ marginBottom: "12px" }}
                            >
                                Pages
                            </Typography>
                            <Stack
                                spacing={1}
                                sx={{
                                    fontSize: "16px",
                                    textDecoration: "none",
                                }}
                            >
                                <Link href="/" underline="none">
                                    Home
                                </Link>
                                <Link underline="none">Blog</Link>
                                <Link underline="none">About</Link>
                                <Link underline="none">Bookmarks</Link>
                                <Link underline="none">Showcase</Link>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                fontWeight="bold"
                                variant="body2"
                                sx={{ marginBottom: "12px" }}
                            >
                                Social
                            </Typography>
                            <Stack
                                spacing={1}
                                sx={{
                                    fontSize: "16px",
                                    textDecoration: "none",
                                }}
                            >
                                <Link
                                    href="https://www.youtube.com/channel/UChey2Z5IrugYJH75bzs-gUw"
                                    underline="none"
                                >
                                    Youtube
                                </Link>
                                <Link
                                    href="https://twitter.com/rofirezadev"
                                    underline="none"
                                >
                                    Twitter
                                </Link>
                                <Link
                                    href="https://github.com/arrofirezasatria"
                                    underline="none"
                                >
                                    Github{" "}
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
      <Divider sx={{ pt: "40px" }} />
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", px: "60px" }}
      >
        <Box sx={{ py: 2 }}>
          <Typography sx={{ color: "inherit" }}>
            {" "}
            © {new Date().getFullYear()} Arrofi Reza S.
          </Typography>
        </Box>
        <Box sx={{ py: 2 }}>
          <Link
            display="inline-block"
            fontSize="xs"
            fontWeight="semibold"
            _hover={{ textDecoration: "none" }}
            href="https://vercel.com"
            isExternal
          >
            Powered by{" "}
            <Typography
              component="span"
              role="img"
              aria-label="Vercel logo"
              sx={{ color: "" }}
            >
              ▲
            </Typography>{" "}
            Vercel
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
