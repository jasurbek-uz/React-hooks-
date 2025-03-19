import { createContext, useState, useContext } from "react";

// Create Context
const ThemeContext = createContext();

// Custom Hook for easy access
export const useTheme = () => useContext(ThemeContext);

// Provider Component
export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => setDarkMode((prev) => !prev);

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
