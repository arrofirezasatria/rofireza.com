import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

export default function Footer() {
  return (
    <Container component="footer" maxWidth="md">
      <Divider variant="middle" />
      <Grid container>
        <Grid item>a</Grid>
        <Grid item>b</Grid>
        <Grid item>c</Grid>
      </Grid>
      This is Footer
    </Container>
  );
}
