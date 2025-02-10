import React, { createContext, useContext, useState, useEffect } from 'react';
import dashboardData from '../data/dashboardData.json';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Loading dashboard data:', dashboardData);
        setData(dashboardData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log('Current dashboard state:', { data, loading });

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