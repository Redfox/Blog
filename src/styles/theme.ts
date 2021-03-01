import { theme, Theme } from '@chakra-ui/react';

const customTheme: Theme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto Slab, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '4px',
    md: '8px',
  },
  colors: {
    ...theme.colors,
    pink: {
      ...theme.colors.pink,
      '300': '#f50057',
      '500': '#f50057',
      '600': '#e20050',
      '700': '#aa003c',
      '800': '#710028',
      '900': '#380014',
    },
    purple: {
      ...theme.colors.purple,
      '300': '#bb86fc',
    },
    gray: {
      ...theme.colors.gray,
      '400': '#AFAFAF',
      '500': '#524F61',
      '700': '#201e29',
      '800': '#17161E',
      '900': '#0B0A0D',
    },
  },
};

export default customTheme;
