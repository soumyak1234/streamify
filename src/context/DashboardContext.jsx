import React, { createContext, useContext, useState, useEffect } from 'react';

// Sample data
const sampleData = {
  metrics: {
    totalUsers: 1000000,
    activeUsers: 750000,
    totalStreams: 5000000,
    revenue: 10000000,
    topArtist: "AR Rahman"
  },
  revenueDistribution: [
    { source: "Subscriptions", value: 6000000, color: "#8884d8" },
    { source: "Ads", value: 3000000, color: "#82ca9d" },
    { source: "Downloads", value: 1000000, color: "#ffc658" }
  ],
  topSongs: [
    { name: "Song 1", streams: 1000000 },
    { name: "Song 2", streams: 800000 },
    { name: "Song 3", streams: 600000 },
    { name: "Song 4", streams: 400000 },
    { name: "Song 5", streams: 200000 }
  ],
  userGrowth: [
    { month: "Jan", users: 600000 },
    { month: "Feb", users: 700000 },
    { month: "Mar", users: 800000 },
    { month: "Apr", users: 900000 },
    { month: "May", users: 1000000 }
  ]
};

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using sample data instead of loading from file
        setData(sampleData);
        console.log('Dashboard data loaded:', sampleData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading dashboard data...</div>;
  }

  return (
    <DashboardContext.Provider value={{ dashboardData: data, loading }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export default DashboardContext;