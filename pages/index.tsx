import { GrayMatterFile } from 'gray-matter';

import HtmlDisplay, {
  Props as HtmlDisplayProps,
} from 'src/components/HtmlDisplay';
import Layout from 'src/components/Layout';
import { getMarkdownList } from 'src/utils/gist';

interface Props extends HtmlDisplayProps {
  matter: GrayMatterFile<string>;
}

const HomePage: React.FC<Props> = (props) => {
  const { matter, html } = props;
  return (
    <Layout>
      <pre>{JSON.stringify(matter?.data ?? {}, null, 2)}</pre>
      <HtmlDisplay html={html} />
    </Layout>
  );
};

export const getServerSideProps = async (): Promise<{ props: Props }> => {
  const { html, matter } = await getMarkdownList();

  return {
    props: {
      html,
      matter,
    },
  };
};

export default HomePage;
