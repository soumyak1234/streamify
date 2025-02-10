import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import KeyMetrics from './KeyMetrics';
import UserGrowthChart from './UserGrowthChart';
import RevenueDistribution from './RevenueDistribution';
import TopSongsChart from './TopSongsChart';
import GeographicDistribution from './GeographicDistribution';
import StreamsTable from './StreamsTable';
import QuickActions from './QuickActions';

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, py: 3 }}>
        <QuickActions />
        <Grid container spacing={3}>
          {/* Key Metrics Section */}
          <Grid item xs={12}>
            <KeyMetrics />
          </Grid>
          
          {/* Charts Section */}
          <Grid item xs={12} md={8}>
            <UserGrowthChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <RevenueDistribution />
          </Grid>
          <Grid item xs={12} md={6}>
            <TopSongsChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <GeographicDistribution />
          </Grid>
          
          {/* Table Section */}
          <Grid item xs={12}>
            <StreamsTable />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard; 