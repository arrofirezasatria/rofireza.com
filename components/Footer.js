import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { alpha, styled } from "@mui/material/styles";

import Links from "next/link";

const StyledLink = styled((props) => <Link underline="none" {...props} />)(
  ({ theme }) => ({})
);

export default function Footer() {
  return (
    <Container component="footer" maxWidth="md" sx={{ pb: 8, pt: 2 }}>
      <Divider variant="middle" sx={{ mb: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
            <StyledLink href="/newsletter">Newsletter</StyledLink>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <StyledLink href="https://www.twitter.com">Twitter</StyledLink>
            <StyledLink href="https://www.youtube.com"> Youtube</StyledLink>
            <StyledLink href="https://github.com">Github</StyledLink>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <StyledLink href="/uses">Uses</StyledLink>
            <StyledLink href="/guestbook">Guestbook</StyledLink>
            <StyledLink href="/guestbook">Snippets</StyledLink>
            <StyledLink href="#">Tweets</StyledLink>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
