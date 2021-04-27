import { FC } from 'react';
import '../styles/globals.css'

// TODO refine types
interface Props {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}

const App: FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
