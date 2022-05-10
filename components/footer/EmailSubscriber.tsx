import * as React from "react";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import InputBase from "@mui/material/InputBase";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { blueDark } from "modules/ThemeContext";

const Form = styled("form")({});

export default function EmailSubscriber() {
    return (
        <Form>
            <FormLabel
                htmlFor="email-subscribe"
                sx={{
                    typography: "caption",
                    mb: 0.5,
                    color: "text.secondary",
                    fontWeight: 500,
                }}
            >
                Enter your email:
            </FormLabel>
            <Box
                sx={{
                    display: "flex",
                    borderRadius: 1,
                    overflow: "hidden",
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: 360,
                }}
            >
                <InputBase
                    id="email-subscribe"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    inputProps={{ required: true }}
                    sx={{
                        bgcolor: (theme) =>
                            theme.palette.mode === "dark"
                                ? blueDark[900]
                                : theme.palette.grey[100],
                        px: 1,
                        py: 0.5,
                        typography: "body2",
                        flexGrow: 1,
                        minWidth: 200,
                        "&:focus": {
                            outline: (theme) =>
                                `2px solid ${
                                    theme.palette.mode === "dark"
                                        ? theme.palette.primary[400]
                                        : theme.palette.primary[200]
                                }`,
                            outlineOffset: "2px",
                        },
                    }}
                />
                <Button
                    type="submit"
                    sx={{
                        bgcolor: (theme) =>
                            theme.palette.mode === "dark"
                                ? blueDark[600]
                                : theme.palette.grey[300],
                        py: 1,
                        px: 2,
                        color: "text.primary",
                        borderRadius: "0px",
                        "&:hover": {
                            bgcolor: (theme) =>
                                theme.palette.mode === "dark"
                                    ? blueDark[700]
                                    : theme.palette.grey[400],
                        },
                    }}
                >
                    Subscribe
                </Button>
            </Box>
        </Form>
    );
}
