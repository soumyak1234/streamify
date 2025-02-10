import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GeographicDistribution = () => {
  const theme = useTheme();

  const data = [
    { region: 'North India', listeners: 2500000, revenue: 12000000 },
    { region: 'South India', listeners: 2000000, revenue: 9000000 },
    { region: 'West India', listeners: 1800000, revenue: 8000000 },
    { region: 'East India', listeners: 1200000, revenue: 5000000 },
    { region: 'Central India', listeners: 800000, revenue: 3000000 },
  ];

  const formatIndianCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatListeners = (value) => {
    const inLakhs = value / 100000;
    return `${inLakhs.toFixed(1)}L Listeners`;
  };

  return (
    <Paper sx={{ p: 3, height: 400 }}>
      <Typography variant="h6" gutterBottom>
        Regional Distribution
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="region" 
            angle={-45}
            textAnchor="end"
            height={70}
            interval={0}
          />
          <YAxis 
            yAxisId="left" 
            tickFormatter={(value) => `${(value / 100000).toFixed(1)}L`}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            tickFormatter={(value) => `${(value / 10000000).toFixed(1)}Cr`}
          />
          <Tooltip 
            formatter={(value, name) => {
              if (name === "Monthly Listeners") {
                return [formatListeners(value), "Listeners"];
              }
              return [formatIndianCurrency(value), "Revenue"];
            }}
          />
          <Legend />
          <Bar 
            yAxisId="left"
            dataKey="listeners" 
            name="Monthly Listeners" 
            fill={theme.palette.primary.main}
          />
          <Bar 
            yAxisId="right"
            dataKey="revenue" 
            name="Revenue" 
            fill={theme.palette.secondary.main}
          />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default GeographicDistribution; 