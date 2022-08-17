import '../styles/global.css';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

import Navbar from '@/components/Navbar';
import { RouterTransition } from '@/components/RouterTransition';
import theme from '@/theme/mantine';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <RouterTransition />
      <RecoilRoot>
        <Navbar isHome={isHome} activeNav={router.pathname} />
        <Component {...pageProps} />
      </RecoilRoot>
    </MantineProvider>
  );
};

export default MyApp;
