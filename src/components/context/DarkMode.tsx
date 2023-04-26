import React from 'react';


export type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const DarkModeContext = React.createContext<DarkModeContextType | null>(null);

export default DarkModeContext;