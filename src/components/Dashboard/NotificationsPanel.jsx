import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Notifications,
  MusicNote,
  AttachMoney,
  Person,
  Warning,
} from '@mui/icons-material';

const NotificationsPanel = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const notifications = [
    {
      type: 'alert',
      title: 'High Server Load',
      message: 'Server load has reached 85%',
      time: '5 minutes ago',
      icon: <Warning sx={{ color: '#f44336' }} />,
    },
    {
      type: 'music',
      title: 'New Artist Trending',
      message: 'Taylor Swift\'s new album is trending',
      time: '1 hour ago',
      icon: <MusicNote sx={{ color: theme.palette.primary.main }} />,
    },
    {
      type: 'revenue',
      title: 'Revenue Milestone',
      message: 'Monthly revenue target achieved',
      time: '2 hours ago',
      icon: <AttachMoney sx={{ color: '#4caf50' }} />,
    },
    {
      type: 'user',
      title: 'New User Milestone',
      message: 'Reached 1 million active users',
      time: '1 day ago',
      icon: <Person sx={{ color: theme.palette.secondary.main }} />,
    },
  ];

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ 
          ml: 2,
          color: theme.palette.mode === 'light' ? 'text.primary' : 'inherit'
        }}
      >
        <Badge badgeContent={notifications.length} color="error">
          <Notifications />
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 320, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Notifications
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {notifications.map((notification, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>{notification.icon}</ListItemIcon>
                  <ListItemText
                    primary={notification.title}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {notification.message}
                        </Typography>
                        <br />
                        <Typography
                          component="span"
                          variant="caption"
                          color="text.secondary"
                        >
                          {notification.time}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                {index < notifications.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NotificationsPanel; 