import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../../context/DashboardContext';

const TopSongsChart = () => {
  const { dashboardData, loading } = useDashboard();
  const theme = useTheme();

  if (loading) {
    return <div>Loading...</div>;
  }

  const formatData = dashboardData.topSongs.map(song => ({
    name: song.name,
    streams: song.streams,
    artist: song.artist
  }));

  return (
    <Paper sx={{ p: 3, height: 400 }}>
      <Typography variant="h6" gutterBottom>
        Top 5 Streamed Songs
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={formatData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={70}
            interval={0}
          />
          <YAxis />
          <Tooltip
            formatter={(value, name) => [
              `${value.toLocaleString()} streams`,
              name
            ]}
            labelFormatter={(label) => {
              const song = formatData.find(s => s.name === label);
              return `${song.name} by ${song.artist}`;
            }}
          />
          <Legend />
          <Bar 
            dataKey="streams" 
            fill={theme.palette.primary.main}
            name="Stream Count"
          />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default TopSongsChart;