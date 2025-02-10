import React from 'react';
import { Paper, Typography, Grid, IconButton, Tooltip, useTheme } from '@mui/material';
import { 
  PlaylistAdd, 
  PersonAdd, 
  Campaign, 
  Assessment, 
  CloudDownload,
  Refresh
} from '@mui/icons-material';

const QuickActions = () => {
  const theme = useTheme();

  const actions = [
    { icon: <PlaylistAdd />, title: 'New Playlist', color: theme.palette.primary.main },
    { icon: <PersonAdd />, title: 'Add Artist', color: theme.palette.secondary.main },
    { icon: <Campaign />, title: 'New Campaign', color: '#00bcd4' },
    { icon: <Assessment />, title: 'Analytics', color: '#4caf50' },
    { icon: <CloudDownload />, title: 'Export Data', color: '#ff9800' },
    { icon: <Refresh />, title: 'Refresh Stats', color: '#9c27b0' },
  ];

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Quick Actions
      </Typography>
      <Grid container spacing={2}>
        {actions.map((action, index) => (
          <Grid item xs={4} sm={2} key={index}>
            <Tooltip title={action.title}>
              <IconButton
                sx={{
                  width: '100%',
                  height: 60,
                  backgroundColor: `${action.color}15`,
                  '&:hover': {
                    backgroundColor: `${action.color}25`,
                  },
                  color: action.color,
                }}
              >
                {action.icon}
              </IconButton>
            </Tooltip>
            <Typography
              variant="caption"
              display="block"
              textAlign="center"
              sx={{ mt: 1 }}
            >
              {action.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default QuickActions; 