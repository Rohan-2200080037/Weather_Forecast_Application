import { createContext, useEffect, useState } from 'react';

// Defaults
const defaultLocation = {
  address: "New Delhi, Delhi, IN",
  lat: 28.6138954,
  lon: 77.2090057,
};

const AppContext = createContext({
  unit: '',
  setUnit: () => {},
  location: {},
  setLocation: () => {},
  theme: '',
  setTheme: () => {},
});

export const AppContextProvider = ({ children }) => {
  // Retrieve values from localStorage if available
  const storedLocation = JSON.parse(localStorage.getItem('location'));
  const storedUnit = localStorage.getItem('unit');
  const storedTheme = localStorage.getItem('theme');

  // Initialize states
  const [unit, setUnit] = useState(storedUnit || 'C');
  const [location, setLocation] = useState(storedLocation || defaultLocation);
  const [theme, setTheme] = useState(storedTheme || 'dark');

  // Sync unit with localStorage
  useEffect(() => {
    localStorage.setItem('unit', unit);
  }, [unit]);

  // Sync theme with localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Optional: Set `document.documentElement.classList` to persist Tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Sync location
  useEffect(() => {
    localStorage.setItem('location', JSON.stringify(location));
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        unit,
        setUnit,
        location,
        setLocation,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
