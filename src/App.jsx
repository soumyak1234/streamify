import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './components/Dashboard';
import theme from './theme';

function App() {
  console.log('App rendering');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardProvider>
        <Dashboard />
      </DashboardProvider>
    </ThemeProvider>
  );
}

export default App; 