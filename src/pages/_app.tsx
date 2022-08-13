import '../styles/global.css';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'dark',
      colors: {
        primary: [
          '#EFEBFA',
          '#D3C6F0',
          '#B7A2E7',
          '#9B7DDD',
          '#7F59D4',
          '#6334CB',
          '#4F2AA2',
          '#3B1F7A',
          '#281551',
          '#140A29',
        ],
      },
      primaryColor: 'primary',
    }}
  >
    <Component {...pageProps} />
  </MantineProvider>
);

export default MyApp;
