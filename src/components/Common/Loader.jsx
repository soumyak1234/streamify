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
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/logo192.png"
            sx={{
              width: 30,
              height: 30,
              animation: 'pulse 1.5s ease-in-out infinite',
              '@keyframes pulse': {
                '0%': { transform: 'scale(0.8)' },
                '50%': { transform: 'scale(1.2)' },
                '100%': { transform: 'scale(0.8)' },
              },
            }}
          />
        </Box>
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