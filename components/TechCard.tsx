import { Avatar, Box, Paper, Typography } from "@mui/material";
import LaunchRounded from "@mui/icons-material/LaunchRounded";
import React from "react";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

export default function TechCard({
    item,
    inView = false,
    logoSize = 40,
}: {
    item: {
        src: string;
        srcSet: string;
        name: string;
        description: string;
        href: string;
    };
    inView?: boolean;
    logoSize?: number | string;
}) {
    const theme = useTheme();

    return (
        <Paper
            component={Link}
            // noLinkStyle
            href={item.href}
            // target="_blank"
            // rel="sponsored noopener"
            // variant="outlined"
            elvation={1}
            sx={{
                p: 2,
                display: "flex",
                height: "100%",
                textDecoration: "none !important",
                cursor: "pointer",
                "& svg": {
                    transition: "0.2s",
                },
                "&:hover": {
                    boxShadow: theme.shadows[5],
                    "& svg": {
                        // transform: "translateY(-2px)",
                    },
                },
            }}
        >
            <Avatar
                {...(true && {
                    src: item.src,
                    srcSet: item.srcSet,
                    alt: `${item.name} logo`,
                })}
                sx={{ borderRadius: "4px", width: logoSize, height: logoSize }}
            />
            <Box sx={{ ml: 2 }}>
                <Typography
                    variant="body2"
                    fontWeight="bold"
                    underline="none"
                    sx={{ textDecoration: "none" }}
                >
                    {item.name}
                    <LaunchRounded
                        color="primary"
                        sx={{ fontSize: 14, verticalAlign: "middle", ml: 0.5 }}
                    />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </Box>
        </Paper>
    );
}
