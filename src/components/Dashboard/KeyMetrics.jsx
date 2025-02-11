import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useDashboard } from '../../context/DashboardContext';

const formatIndianCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });
  return formatter.format(amount);
};

const formatIndianNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

const KeyMetrics = () => {
  const { dashboardData, loading } = useDashboard();

  if (loading) {
    return <div>Loading...</div>;
  }

  const metrics = dashboardData?.metrics || {};

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={2.4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h4">{formatIndianNumber(metrics.totalUsers)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Active Users</Typography>
          <Typography variant="h4">{formatIndianNumber(metrics.activeUsers)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Total Streams</Typography>
          <Typography variant="h4">{formatIndianNumber(metrics.totalStreams)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="h4">{formatIndianCurrency(metrics.revenue)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Top Artist</Typography>
          <Typography variant="h4">{metrics.topArtist}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default KeyMetrics;