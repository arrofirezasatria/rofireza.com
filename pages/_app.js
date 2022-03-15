import '../styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline'; 
import React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
 
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState('light');
 
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  
  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  
  )

}

export default MyApp
