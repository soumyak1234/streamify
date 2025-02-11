import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#7c4dff',
                  light: '#b47cff',
                  dark: '#3f1dcb',
                },
                secondary: {
                  main: '#ff4081',
                  light: '#ff79b0',
                  dark: '#c60055',
                },
                background: {
                  default: '#f8f9fa',
                  paper: '#ffffff',
                },
              }
            : {
                primary: {
                  main: '#9d6eff',
                  light: '#c29fff',
                  dark: '#6b40b3',
                },
                secondary: {
                  main: '#ff669a',
                  light: '#ff99c0',
                  dark: '#cc3366',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
              }),
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h4: {
            fontWeight: 600,
          },
          h6: {
            fontWeight: 600,
          },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                boxShadow: mode === 'light' 
                  ? '0 2px 4px rgba(0,0,0,0.05)'
                  : '0 2px 4px rgba(0,0,0,0.15)',
                borderRadius: 12,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};