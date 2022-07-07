import { Paper } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function WallpaperSong() {
  return (
    <Paper
      elevation={8}
      sx={{
        position: "relative",
        backgroundColor: "lightGray",
        width: "auto",
        height: "120px",
        marginBottom: 5,
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/Screenshot (11).png"
        layout="fill"
        objectFit="cover"
        alt=""
      />
    </Paper>
  );
}
