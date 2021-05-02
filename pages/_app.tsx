import '../styles/globals.css';

import Head from 'next/head';
import { FC } from 'react';

interface Props {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}

const App: FC<Props> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, viewport-fit=cover, initial-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
