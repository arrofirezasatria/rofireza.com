import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function GuestBook({ fallbackData }) {
    return (
        <>
            <Paper
                sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    padding: "24px",
                    my: 2,
                }}
            >
                <Stack sx={{ width: "100%" }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: "bold" }}
                    >
                        Sign In the Guestbook
                    </Typography>
                    <Typography>
                        Share Message for future visitor of my site.
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            width: "100%",
                            border: "2px solid red",
                            borderRadius: 1,
                            my: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <TextField size="small">asd</TextField>
                        <Button>Sign In</Button>
                    </Box>
                    <Typography sx={{ fontSize: "14px" }}>
                        Your information is only used to display your name and
                        reply by email.
                    </Typography>
                </Stack>
            </Paper>
            <Box></Box>
        </>
    );
}
