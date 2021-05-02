import Head from 'next/head';

const Layout: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>Kevin&apos;s Markdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
