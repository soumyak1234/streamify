import React from 'react';
import { Box, Typography, Container, Link, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          <Link color="inherit" href="#">
            Streamify Dashboard
          </Link>{' '}
          {year}
          {' | Made with '}
          <span role="img" aria-label="love">
            ❤️
          </span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 