import React from "react";
import prisma from "../lib/prisma";
import ContainerHero from "../components/ContainerHero";
import Box from "@mui/material/Box";
import GuestBook from "../components/GuestBook";

import { Typography } from "@mui/material";

export default function Guestbook({ fallbackData }) {
  return (
    <ContainerHero>
      <Box>
        <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
          GuestBook
        </Typography>
        <Typography>
          Leave a comment below. It could be anything – appreciation,
          information, wisdom, or even humor. Surprise me!
        </Typography>
        <GuestBook fallbackData={fallbackData} />
      </Box>
    </ContainerHero>
  );
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: "desc",
    },
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }));

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  };
}
