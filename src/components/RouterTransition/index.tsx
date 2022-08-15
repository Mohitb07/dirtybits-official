import {
  NavigationProgress,
  resetNavigationProgress,
  startNavigationProgress,
} from '@mantine/nprogress';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function RouterTransition() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log('start event fired', router.asPath);
      console.log('url: start', url);
      console.log(router.asPath !== url);
      return url !== router.asPath && startNavigationProgress();
    };
    const handleComplete = () => {
      console.log('reset event fired');
      return resetNavigationProgress();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath]);

  return <NavigationProgress size={30} color="green" />;
}
