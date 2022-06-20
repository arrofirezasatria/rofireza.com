import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function ImageMDX(props) {
  return (
    <Box
      sx={{
        my: "20px",
        cursor: "pointer",
        "& img": {
          "border-radius": "12px",
        },
        "&:hover": {},
      }}
    >
      <Image alt="" {...props} />
    </Box>
  );
}
