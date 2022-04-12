import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import useSWR, { useSWRConfig } from "swr";
import fetcher from "../lib/fetcher";
import { format } from "date-fns";

function GuestbookEntry({ entry }) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e) => {
    e.preventDefault();

    await fetch(`/api/guestbook/${entry.id}`, {
      method: "DELETE",
    });

    mutate("/api/guestbook");
  };

  return (
    <Stack sx={{ mt: 3 }}>
      <div>{entry.body}</div>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        <p>{entry.created_by}</p>
        <span>/</span>
        <p>{format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}</p>
        {/*         <>
          <span className="text-gray-200 dark:text-gray-800">/</span>
          <button
            className="text-sm text-red-600 dark:text-red-400"
            onClick={deleteEntry}
          >
            Delete
          </button>
        </> */}
      </Stack>
    </Stack>
  );
}

export default function GuestBook({ fallbackData }) {
  const { data: entries } = useSWR("/api/guestbook", fetcher, {
    fallbackData,
  });
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "24px",
          my: 2,
        }}
      >
        <Stack sx={{ width: "100%" }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
            Sign In the Guestbook
          </Typography>
          <Typography>Share Message for future visitor of my site.</Typography>
          <Box
            component="form"
            sx={{
              width: "100%",
              border: "2px solid red",
              borderRadius: 1,
              my: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField size="small">asd</TextField>
            <Button>Sign In</Button>
          </Box>
          <Typography sx={{ fontSize: "14px" }}>
            Your information is only used to display your name and reply by
            email.
          </Typography>
        </Stack>
      </Paper>
      <Box>
        {entries?.map((entry) => (
          <Box>
            {/*           {entry.id}
            {entry.body}
            {entry.created_by} */}
            <GuestbookEntry key={entry.id} entry={entry} />
          </Box>
        ))}
      </Box>
    </>
  );
}
