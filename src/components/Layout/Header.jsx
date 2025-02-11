import React from 'react';
import { AppBar, Toolbar, Typography, Box, useTheme } from '@mui/material';
import { MusicNote } from '@mui/icons-material';
import NotificationsPanel from '../Dashboard/NotificationsPanel';
import UserProfile from '../Dashboard/UserProfile';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: theme.palette.background.paper }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <MusicNote sx={{ color: theme.palette.primary.main, mr: 1, fontSize: 32 }} />
          <Typography
            variant="h5"
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold'
            }}
          >
            Streamify
          </Typography>
        </Box>
        <NotificationsPanel />
        <UserProfile />
      </Toolbar>
    </AppBar>
  );
};

export default Header;