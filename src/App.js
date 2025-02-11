import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { DashboardProvider } from './context/DashboardContext';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Loader from './components/Common/Loader';
import { useDashboard } from './context/DashboardContext';

const DashboardWrapper = () => {
  const { loading } = useDashboard();

  if (loading) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Dashboard />
      </Box>
      <Footer />
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <DashboardProvider>
        <DashboardWrapper />
      </DashboardProvider>
    </ThemeProvider>
  );
}

export default App;