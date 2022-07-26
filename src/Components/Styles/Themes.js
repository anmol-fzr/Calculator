import { createTheming } from 'react-color-theme';

export const [ThemeProvider, useTheme, themes] = createTheming(
  {
    background: 'bg-gray-900',
    foreground: '#3e3e4a',
    text: '#fff',
    primary: '#fc6',
    secondary: '#4f6bab',
  },
  {
    dark: {
      background: 'bg-gray-900',
      foreground: '#3e3e4a',
      text: '#fff',
    },
    light: {
      background: 'bg-gray-900',
      foreground: '#eee',
      text: '#333',
    },
  }
);