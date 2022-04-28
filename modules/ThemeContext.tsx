import { dark } from "@mui/material/styles/createPalette";
import React, { useContext, useState, createContext } from "react";
const ThemeContext = React.createContext(null);

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleColorMode = () => {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleColorMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
