import React from "react";

import Typography from "@mui/material/Typography";
import { useTheme, alpha, styled } from "@mui/material/styles";
import { blueDark, blue } from "modules/ThemeContext";

export default function TextComponent() {
    return <div>header</div>;
}

export const TypographyH1 = styled((props) => (
    <Typography gutterBottom={true} component="h3" {...props} />
))(({ theme }) => ({
    ...theme.typography.h3,
    fontSize: theme.typography.pxToRem(36),
    fontFamily: "Rubik, Sans-serif",
    margin: "10px 0",
    color:
        theme.palette.mode === "dark" ? theme.palette.grey[50] : blueDark[900],
    fontWeight: 800,
}));

export const TypographyH2 = styled((props) => (
    <Typography
        variant="h5"
        gutterBottom={true}
        {...props}
        sx={{ mt: "20px", fontWeight: 500 }}
    />
))(({ theme }) => ({
    ...theme.typography.h5,
    fontFamily: "Rubik, Sans-serif",
    fontWeight: 700,
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey[100]
            : theme.palette.grey[800],
    margin: "40px 0 4px",
}));

export const TypographyH3 = styled((props) => (
    <Typography gutterBottom={true} {...props} />
))(({ theme }) => ({
    ...theme.typography.h6,
    fontFamily: "Rubik, Sans-serif",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
    margin: "24px 0 8px",
}));

export const TypographyH4 = styled((props) => (
    <Typography
        gutterBottom={true}
        variant="caption"
        paragraph={true}
        {...props}
    />
))(({ theme }) => ({
    ...theme.typography.subtitle1,
    fontFamily: "Rubik, Sans-serif",

    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey[300]
            : theme.palette.grey[800],
    margin: "24px 0 8px",
}));

export const AlinkMDX = styled((props) => (
    <Typography component="a" {...props} sx={{ color: "blue" }} />
))(({ theme }) => ({
    color: theme.palette.mode === "dark" ? blue[400] : blue[700],
    fontWeight: 600,
    "&:hover": {
        color: theme.palette.mode === "dark" ? blue[300] : blue[400],
        transitionProperty: "all",
        transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
        transitionDuration: ".2s",
    },
}));

export const TableMDX = styled((props) => <table {...props} />)(
    ({ theme }) => ({
        display: "block",
        wordBreak: "normal",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        borderCollapse: "collapse",
        marginBottom: "20px",
        borderSpacing: 0,
        color: "red",
    })
);

export const TdMDX = styled((props) => (
    <Typography component="table" {...props} />
))(({ theme }) => ({
    ...theme.typography.body2,
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    color: "red",
}));

export const ThMDX = styled("th")(({ theme }) => ({
    color: "red",
}));

export const ParagraphMDX = styled((props) => (
    <Typography component="p" {...props} />
))(({ theme }) => ({
    ...theme.typography.body1,
    wordBreak: "break-word",
    fontFamily: "Rubik",
    marginBottom: "16px",
    marginTop: "16px",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey[400]
            : theme.palette.grey[800],
}));

export const BlockquoteMDXX = styled((props) => (
    <Typography component="blockquote" {...props} />
))(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    border: "1px solid",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.primary[50] ?? "#fff"
            : theme.palette.primary[900] ?? theme.palette.text.primary,
    backgroundColor:
        theme.palette.mode === "dark"
            ? // Support Material Design theme
              alpha(
                  theme.palette.primary[900] ?? theme.palette.primary.dark,
                  0.3
              )
            : alpha(
                  theme.palette.primary[50] ?? theme.palette.primary.dark,
                  0.8
              ),
    borderLeft: "6px solid",
    fontStyle: "italic",
    fontFamily: "Rubik, sans-serif",
    borderColor:
        theme.palette.mode === "dark" // Support Material Design theme
            ? theme.palette.primary[700] ?? theme.palette.primary.dark
            : theme.palette.primary[300] ?? theme.palette.primary.light,
    padding: "10px 20px",
    margin: "20px 0",
    "& p": {
        fontWeight: 400,
        marginBottom: 0,
        marginTop: 0,
        color:
            theme.palette.mode === "dark"
                ? theme.palette.grey[50]
                : blueDark[800],
        "& strong": {
            color:
                theme.palette.mode === "dark"
                    ? theme.palette.primary[100] ?? "#fff"
                    : theme.palette.primary[800] ?? theme.palette.text.primary,
        },
    },
}));

export const BlockquoteWarning = styled((props) => (
    <Typography component="blockquote" {...props} />
))(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    border: "1px solid",
    borderLeft: "6px solid",
    borderColor:
        theme.palette.mode === "dark"
            ? // Support Material Design theme
              theme.palette.warning[500] ?? theme.palette.warning.dark
            : theme.palette.warning[300] ?? theme.palette.warning.light,
    backgroundColor:
        theme.palette.mode === "dark"
            ? // Support Material Design theme
              alpha(
                  theme.palette.warning[900] ?? theme.palette.warning.dark,
                  0.2
              )
            : theme.palette.warning[50] ?? theme.palette.warning.light,
    padding: "10px 20px",
    margin: "20px 0",
    "& p": {
        marginBottom: 0,
        marginTop: 0,
        fontWeight: 400,
        color:
            theme.palette.mode === "dark"
                ? theme.palette.grey[50]
                : blueDark[800],
    },
}));

export const BlockquoteMDX = (props) => (
    <Typography
        component="blockquote"
        color="blockquote"
        sx={{
            my: "20px",
            color: "white",
            paddingLeft: "16px",
            fontStyle: "italic",
            borderLeftWidth: "0.25rem",
            "& > p": {
                fontWeight: 600,
            },
        }}
        {...props}
    />
);

export const LiMDX = styled((props) => (
    <Typography component="li" {...props} />
))(({ theme }) => ({
    marginTop: "8px",
    marginBottom: "8px",
    typography: "body1",
    fontFamily: "Rubik",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey[400]
            : theme.palette.grey[800],
}));

export const PreMDX = styled((props) => (
    <Typography component="pre" {...props} />
))(({ theme }) => ({
    margin: theme.spacing(2, "auto"),
    padding: theme.spacing(2),
    backgroundColor: `${blueDark[900]} !important`,
    colorScheme: "dark",
    direction: "ltr",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid",
    borderColor: blueDark[700],
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    maxWidth: "calc(100vw - 32px)",
    [theme.breakpoints.up("md")]: {
        maxWidth: "calc(100vw - 32px - 16px)",
    },
}));
