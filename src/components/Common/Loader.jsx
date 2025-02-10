import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2,
        background: 'linear-gradient(45deg, #7c4dff22, #ff408122)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
        }}
      >
        <CircularProgress size={60} thickness={4} />
        
      </Box>
      <Typography
        variant="h6"
        sx={{
          background: 'linear-gradient(45deg, #7c4dff, #ff4081)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold',
        }}
      >
        Loading Streamify...
      </Typography>
    </Box>
  );
};

export default Loader; 