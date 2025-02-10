import React, { createContext, useContext, useState, useEffect } from 'react';
import dashboardData from '../data/dashboardData.json';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulate API call delay
      setTimeout(() => {
        setData(dashboardData);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  return (
    <DashboardContext.Provider value={{ dashboardData: data, loading, error }}>
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