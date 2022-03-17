import React from "react";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function BlogPostCard({ title, slug, gradient }) {
  return (
    <Link href={"#"}>
      <MuiLink>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "200px",
            border: "1px solid lightgray",
            borderRadius: "6px",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            verticalAlign: "center",
          }}
        >
          <Box>abs</Box>
        </Box>
      </MuiLink>
    </Link>
  );
}
