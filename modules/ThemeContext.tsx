import React from "react";

const themeContext = React.createContext();

export default function themeContext({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    return <>{children}</>;
}
