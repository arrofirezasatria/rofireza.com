import { Box, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTheme } from "@mui/material/styles";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";

export default function VideoCard({ href, alter, blur, imageLink }) {
  const theme = useTheme();

  return (
    <>
      <Link href={href}>
        <Box
          sx={{
            position: "relative",
            borderRadius: "10px",
            height: {
              xs: `calc( ${innerWidth}px * ( 9 / 16 ) - 20px )`,
              md: "189px",
            },
            overflow: "hidden",
            "&:hover": {
              "& div": {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: "400ms",
              },
            },
          }}
        >
          <Image
            src={`/showcase/original/${imageLink}`}
            alt={alter}
            layout="fill"
            blurDataURL={blur}
            placeholder="blur"
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              overflow: "hidden",
              opacity: 0,
              background: "rgba(0,0,0,0.36)",
            }}
          >
            <PlayCircleRoundedIcon fontSize="large" />
          </Box>
        </Box>
      </Link>
      <Link href={href} underline="hover">
        <Typography
          component="h5"
          sx={{
            mt: "0.5rem",
            mb: 1,
            fontSize: "20px",
            lineHeight: "1.2",
          }}
        >
          {/* {data.name} */}
        </Typography>
      </Link>
      <Typography
        sx={{
          color: theme.palette.text.secondary,
        }}
      >
        {/* {data.short_desc} */}
      </Typography>
    </>
  );
}
