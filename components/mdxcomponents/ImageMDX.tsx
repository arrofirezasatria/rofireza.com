import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function ImageMDX(props) {
    return (
        <Box
            sx={{
                my: "20px",
                "& img": {
                    "border-radius": "18px",
                },
            }}
        >
            <Image {...props} />
        </Box>
    );
}
