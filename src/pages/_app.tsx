import '../styles/global.css';
import '../styles/Nprogress.css';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { RecoilRoot } from 'recoil';

import Navbar from '@/components/Navbar';
import AuthUserProvider from '@/context/authUser';
import theme from '@/theme/mantine';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <RecoilRoot>
        <AuthUserProvider>
          <Navbar isHome={isHome} activeNav={router.pathname} />
          <Component {...pageProps} />
        </AuthUserProvider>
      </RecoilRoot>
    </MantineProvider>
  );
};

export default MyApp;
