import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { alpha, styled } from "@mui/material/styles";

const StyledLink = styled((props) => <Link underline="none" {...props} />)(
  ({ theme }) => ({})
);

export default function Footer() {
  return (
    <Container component="footer" maxWidth="md" sx={{ mb: 2 }}>
      <Divider variant="middle" sx={{ mb: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stack>
            <StyledLink>Home</StyledLink>
            <StyledLink>About</StyledLink>
            <StyledLink>Newsletter</StyledLink>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <StyledLink>Twitter</StyledLink>
            <StyledLink>Youtube</StyledLink>
            <StyledLink>Github</StyledLink>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <StyledLink underline="none">Uses</StyledLink>
            <StyledLink href="#">Guestbook</StyledLink>
            <StyledLink>Tweets</StyledLink>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
