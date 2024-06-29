import React, { createContext, useState, useContext, ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU, enUS } from '@mui/material/locale';

type Language = 'ru' | 'en';
type ThemeMode = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const theme = createTheme(
    {
      palette: {
        mode: themeMode,
      },
    },
    language === 'ru' ? ruRU : enUS
  );

  return (
    <AppContext.Provider value={{ language, setLanguage, themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};