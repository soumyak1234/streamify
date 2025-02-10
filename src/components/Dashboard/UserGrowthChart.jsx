import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../../context/DashboardContext';

const UserGrowthChart = () => {
  const { dashboardData, loading } = useDashboard();
  const theme = useTheme();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Paper sx={{ p: 3, height: 400 }}>
      <Typography variant="h6" gutterBottom>
        User Growth Trends
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={dashboardData.userGrowthData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="totalUsers"
            name="Total Users"
            stroke={theme.palette.primary.main}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="activeUsers"
            name="Active Users"
            stroke={theme.palette.secondary.main}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default UserGrowthChart; 