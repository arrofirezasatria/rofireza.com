import React from "react";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

export default function BlogPostCard({ title = "", slug = "", gradient = "" }) {
  return (
    <Link href={"#"}>
      <a>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            width: "100%",
            height: "200px",
            /* border: '4px solid lightgray',
            borderRadius: '6px', */
            backgroundColor: "transparent",
            padding: 2,
          }}
        >
          <Stack
            sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
          >
            <Typography sx={{ fontSize: "16px", marginBottom: 3 }}>
              Adipisicing laboris incididunt dolor velit tempor ullamco in
              laboris.
            </Typography>
            <Stack direction="row">
              {/* <Box>Icon</Box> */}
              <Box>
                <Typography variant="subtitle2">76</Typography>
              </Box>
            </Stack>
          </Stack>
        </Paper>
      </a>
    </Link>
  );
}
