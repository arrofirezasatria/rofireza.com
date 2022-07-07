import React from "react";
import { Grid, Typography } from "@mui/material";
import TechCard from "components/TechCard";

const TECHs = [
  {
    src: "/static/sponsors/tidelift.svg",
    srcSet: "/static/sponsors/tidelift.svg",
    name: "Next-Sitemap",
    description: "Sitemap generator for Next.js",
    href: "https://www.npmjs.com/package/next-sitemap",
  },
  {
    src: "/tech/contentlayer.jpg",
    srcSet: "/tech/contentlayer.jpg",
    name: "Contentlayer",
    description: "Content made easy for developers",
    href: "https://www.contentlayer.dev/",
  },
  {
    src: "/tech/maizzle.png",
    srcSet: "/tech/maizzle.png",
    name: "Maizzle",
    description: "HTML emails with Tailwind CSS",
    href: "https://maizzle.com/",
  },
  {
    src: "/tech/plaiceholder-logo.jpg",
    srcSet: "/tech/plaiceholder-logo.jpg",
    name: "Plaiceholder",
    description: "Beautiful blur image placeholders",
    href: "https://plaiceholder.co/",
  },
];

export default function RecentTech() {
  return (
    <>
      <Typography
        component="h3"
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: 1,
          marginTop: "40px",
        }}
      >
        Recent Tech.
      </Typography>
      <Grid container spacing={2}>
        {TECHs.map((data, index) => {
          return (
            <Grid item md={6} key={index}>
              <TechCard item={data} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
