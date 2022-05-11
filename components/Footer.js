import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { alpha, styled } from "@mui/material/styles";
import { IconButton, Typography } from "@mui/material";
import { grey, blueDark, blue } from "../modules/ThemeContext";

import EmailSubscriber from "./footer/EmailSubscriber";
import EmailIcon from "@mui/icons-material/Email";

import Links from "next/link";

const StyledLink = styled((props) => <Link underline="none" {...props} />)(
  ({ theme }) => ({})
);

export default function Footer() {
  return (
    <Container component="footer" maxWidth="md" sx={{ pb: 8, pt: 2 }}>
      <Divider sx={{ mb: "40px" }} />
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography
            sx={{
              color: blueDark[100],
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Reach me on ,
          </Typography>

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
          <Typography
            sx={{
              color: blueDark[300],
              fontSize: "14px",
              paddingTop: "36px",
            }}
          >
            Join our newsletter for regular updates. No spam ever.
          </Typography>
          <Box sx={{}}>
            <EmailSubscriber />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={2} sx={{ fontSize: "14px", textDecoration: "none" }}>
            <Typography fontWeight="bold" variant="body2">
              Products
            </Typography>
            <Link underline="none">MUI Core</Link>
            <Link underline="none">MUI X</Link>
            <Link underline="none">Templates</Link>
            <Link underline="none">Design kits</Link>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={2}>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/guestbook">Guestbook</StyledLink>
            <StyledLink href="#">Tweets</StyledLink>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ pt: "40px" }} />
    </Container>
  );
}
