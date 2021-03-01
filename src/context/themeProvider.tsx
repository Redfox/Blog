import theme from 'styles/theme';

import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';

export const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: 'light' }}>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}

