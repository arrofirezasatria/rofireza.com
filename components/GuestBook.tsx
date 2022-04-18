import React from "react";
import { useState, useRef } from "react";
import useSWR, { useSWRConfig } from "swr";
import { signIn, useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Form, FormState } from "../lib/types";

export default function GuestBook({ fallbackData }) {
  const { data: session } = useSession();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const { mutate } = useSWRConfig();
  const inputEl = useRef(null);

  const leaveEntry = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    console.log(session);

    const res = await fetch("/api/guestbook", {
      body: JSON.stringify({
        body: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    mutate("/api/guestbook");
    setForm({
      state: Form.Success,
      message: `Hooray! Thanks for signing my Guestbook.`,
    });
  };

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
            onSubmit={leaveEntry}
          >
            <TextField inputRef={inputEl} size="small" />

            {/*                         
                        <TextField size="small" ref={inputEl} required>
                            asd
                        </TextField>
                        <TextField size="small">asd</TextField> 
            */}
            {session?.user && <Button type="submit">Sign</Button>}

            {!session && (
              <Button
                href="/api/auth/signin/github"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                log
              </Button>
            )}
          </Box>
          <Typography sx={{ fontSize: "14px" }}>
            Your information is only used to display your name and reply by
            email.
          </Typography>
        </Stack>
      </Paper>
      <Box>{}</Box>
    </>
  );
}
