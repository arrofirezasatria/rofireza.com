import { Paper, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function WallpaperSong() {
    return (
        <Paper
            elevation={8}
            sx={{
                position: "relative",
                width: "auto",
                height: "120px",
                marginBottom: 5,
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                "&:hover": {
                    "& div": {
                        opacity: "1",
                        transitionProperty: "opacity",
                        transitionDuration: "300ms",
                    },
                },
            }}
        >
            <Image
                src="/Screenshot (11).png"
                layout="fill"
                objectFit="cover"
                alt=""
            />
            <Box
                sx={{
                    position: "absolute",
                    background: "rgba(0,0,0,0.36)",
                    width: "100%",
                    height: "100%",
                    opacity: "0",
                }}
            >
                Recent Song
            </Box>
        </Paper>
    );
}
