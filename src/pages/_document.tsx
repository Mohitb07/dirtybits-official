import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

const getInitialProps = createGetInitialProps();
// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  static getInitialProps = getInitialProps;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
