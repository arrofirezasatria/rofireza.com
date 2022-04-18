import React from "react";
import { useState, useRef } from "react";
import useSWR, { useSWRConfig } from "swr";
import { signIn, signOut, useSession } from "next-auth/react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Divider, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Form, FormState } from "../lib/types";
import fetcher from "../lib/fetcher";
import { format } from "date-fns";

function GuestbookEntry({ entry, user }) {
    const { mutate } = useSWRConfig();
    const deleteEntry = async (e) => {
        e.preventDefault();

        await fetch(`/api/guestbook/${entry.id}`, {
            method: "DELETE",
        });

        mutate("/api/guestbook");
    };

    return (
        <Stack>
            <Typography>{entry.body}</Typography>
            <Stack direction="row" spacing={1}>
                <Typography sx={{ fontSize: "14px", color: "gray" }}>
                    {entry.created_by}
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography
                    sx={{ fontSize: "14px", color: "gray", marginTop: 1 }}
                >
                    {format(
                        new Date(entry.updated_at),
                        "d MMM yyyy 'at' h:mm bb"
                    )}
                </Typography>
                {user && entry.created_by === user.name && (
                    <>
                        <span className="text-gray-200 dark:text-gray-800">
                            /
                        </span>
                        <button
                            className="text-sm text-red-600 dark:text-red-400"
                            onClick={deleteEntry}
                        >
                            Delete
                        </button>
                    </>
                )}
            </Stack>
        </Stack>
    );
}

export default function GuestBook({ fallbackData }) {
    const { data: session } = useSession();
    const [form, setForm] = useState<FormState>({ state: Form.Initial });
    const { mutate } = useSWRConfig();
    const inputEl = useRef(null);
    const { data: entries } = useSWR("/api/guestbook", fetcher, {
        fallbackData,
    });

    const leaveEntry = async (e) => {
        e.preventDefault();
        setForm({ state: Form.Loading });

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
                {/*  <Button onClick={() => signOut()}>signout</Button> */}
                <Stack sx={{ width: "100%" }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: "bold" }}
                    >
                        Sign In the Guestbook
                    </Typography>
                    <Typography>
                        Share Message for future visitor of my site.
                    </Typography>
                    {!session && (
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                signIn("github");
                            }}
                        >
                            adasd
                        </Button>
                    )}
                    {session?.user && (
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

<<<<<<< HEAD
                            {/*                         
                                            <TextField size="small" ref={inputEl} required>
                                                asd
                                            </TextField>
                                            <TextField size="small">asd</TextField> */}
                            {session?.user && (
                                <Button type="submit">Sign</Button>
                            )}

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
                    )}
=======
                        {/*                         
                        <TextField size="small" ref={inputEl} required>
                            asd
                        </TextField>
<<<<<<< HEAD
                        <TextField size="small">asd</TextField> 
            */}
            {session?.user && <Button type="submit">Sign</Button>}
=======
                        <TextField size="small">asd</TextField> */}
                        {session?.user && <Button type="submit">Sign</Button>}
>>>>>>> d1ec6dc2ab1b8db6d697671196b6422d87efcef5
>>>>>>> dbd5e84c2536f3d4fcd07f6ddce5837252fcaa6c

                    <Typography sx={{ fontSize: "14px" }}>
                        Your information is only used to display your name and
                        reply by email.
                    </Typography>
                </Stack>
            </Paper>
            <Stack spacing={2}>
                {entries?.map((entry) => (
                    <GuestbookEntry
                        key={entry.id}
                        entry={entry}
                        user={session?.user}
                    />
                ))}
            </Stack>
        </>
    );
}

/* return <div>{entry.body}</div>; */
