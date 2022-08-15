import '../styles/global.css';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Navbar from '@/components/Navbar';
import { RouterTransition } from '@/components/RouterTransition';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  return (
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
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}
    >
      <RouterTransition />
      <Navbar isHome={isHome} activeNav={router.pathname} />
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
