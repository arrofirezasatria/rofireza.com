import { dark } from "@mui/material/styles/createPalette";
import React, { useContext, useState, createContext } from "react";
import {
    ThemeProvider as ThemeProviderMUI,
    createTheme,
    responsiveFontSizes,
} from "@mui/material/styles";
const ThemeContext = React.createContext(null);

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleColorMode = () => {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    };

    const theme = responsiveFontSizes(
        React.useMemo(
            () =>
                createTheme({
                    palette: {
                        mode: darkTheme === true ? "light" : "dark",
                    },
                    typography: {
                        fontFamily: [
                            "Rubik",
                            "Sans-serif",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            '"Segoe UI"',
                            "Roboto",
                            '"Helvetica Neue"',
                            "Arial",
                            "sans-serif",
                            '"Apple Color Emoji"',
                            '"Segoe UI Emoji"',
                            '"Segoe UI Symbol"',
                        ].join(","),
                    },
                }),
            [darkTheme]
        )
    );

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleColorMode }}>
            <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>
        </ThemeContext.Provider>
    );
}
