'use client'
import { MainLayout, Viewport } from '@/components';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { FC } from 'react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const App: FC = () => (
  <CacheProvider>
    <ChakraProvider
      theme={theme}
    >
      <MainLayout>
        <Viewport />
      </MainLayout>
    </ChakraProvider>
  </CacheProvider>
);

export default App;
