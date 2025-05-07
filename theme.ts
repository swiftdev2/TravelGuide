import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'yellow',
  colors: {
    duckYellow: [
      '#FFF9C4', // Light yellow
      '#FFF59D',
      '#FFF176',
      '#FFEE58',
      '#FFEB3B',
      '#FDD835',
      '#FBC02D',
      '#F9A825',
      '#F57F17',
      '#FF6F00', // Dark orange
    ],
    duckBlue: [
      '#E3F2FD', // Light blue
      '#BBDEFB',
      '#90CAF9',
      '#64B5F6',
      '#42A5F5',
      '#2196F3',
      '#1E88E5',
      '#1976D2',
      '#1565C0',
      '#0D47A1', // Dark blue
    ],
  },
  primaryShade: 6,
});
