import { Select } from '@mantine/core';
import monacoThemes from 'monaco-themes/themes/themelist.json';
import React from 'react';

type ThemeProps = {
  onThemeChange: (theme: string) => void;
  theme: string;
};

const ThemeDropdown: React.FC<ThemeProps> = ({ onThemeChange, theme }) => {
  return (
    <Select
      label="Theme"
      placeholder="Pick one"
      data={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        value: themeId,
        label: themeName,
      }))}
      onChange={onThemeChange}
      value={theme}
    />
  );
};
export default ThemeDropdown;
