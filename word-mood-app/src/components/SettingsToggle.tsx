import React from 'react';
import { FormControlLabel, Switch, Select, MenuItem, Box } from '@mui/material';
import { useApp } from '../contexts/AppContext';

const SettingsToggle: React.FC = () => {
  const { language, setLanguage, themeMode, setThemeMode } = useApp();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', top: 16, right: 16 }}>
      <Select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'ru')}
        sx={{ mr: 2, minWidth: 80, height: 40 }}
        size="small"
      >
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="ru">RU</MenuItem>
      </Select>
      <FormControlLabel
        control={
          <Switch
            checked={themeMode === 'dark'}
            onChange={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
            size="small"
          />
        }
        label={themeMode === 'light' ? 'Dark' : 'Light'}
      />
    </Box>
  );
};

export default SettingsToggle;