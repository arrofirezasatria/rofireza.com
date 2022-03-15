import * as React from "react";
import Appbar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

export default function AppBar() {
  return (
    <Appbar position="static">
      <Toolbar variant="dense">
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Container>
      </Toolbar>
    </Appbar>
  );
}
