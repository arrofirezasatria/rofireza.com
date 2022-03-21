import React from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

export default function VideoCard({ href, length, title, index }) {
  return (
    <Link href={href}>
      <Stack direction="row">
        <Box>{index}</Box>
        <Box>{title}</Box>
        <Box>{length}</Box>
      </Stack>
    </Link>
  );
}
