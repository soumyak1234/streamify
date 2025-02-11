import React, { useState } from 'react';
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Settings,
  ExitToApp,
  Person,
  DarkMode,
  LightMode,
} from '@mui/icons-material';
import { useThemeMode } from '../../context/ThemeContext';

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar
          sx={{
            bgcolor: theme.palette.primary.main,
            width: 32,
            height: 32,
          }}
        >
          A
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </MenuItem>
        <MenuItem onClick={toggleTheme}>
          <ListItemIcon>
            {mode === 'dark' ? (
              <LightMode fontSize="small" />
            ) : (
              <DarkMode fontSize="small" />
            )}
          </ListItemIcon>
          <ListItemText primary={`${mode === 'dark' ? 'Light' : 'Dark'} Mode`} />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserProfile;