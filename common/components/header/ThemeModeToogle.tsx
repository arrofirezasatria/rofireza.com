import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";

export default function ThemeModeToogle(props: {
    checked: boolean;
    onChange: (checked: boolean) => void;
}) {
    return (
        <Tooltip
            title={props.checked ? "Turn on the light" : "Turn off the light"}
        >
            <IconButton
                color="primary"
                disableTouchRipple
                onClick={() => props.onChange(!props.checked)}
            >
                {props.checked ? (
                    <LightModeOutlined fontSize="small" />
                ) : (
                    <DarkModeOutlined fontSize="small" />
                )}
            </IconButton>
        </Tooltip>
    );
}
