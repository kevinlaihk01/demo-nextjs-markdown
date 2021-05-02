import matter, { GrayMatterFile } from 'gray-matter';
import remarkAttr from 'remark-attr';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import remarkUnwrapImages from 'remark-unwrap-images';
import unified from 'unified';
import { VFile } from 'vfile';

import gistClient from 'src/api/gist-client';

export const getMarkdownList = async (): Promise<{
  md: string;
  html: string;
  processed: VFile;
  matter: GrayMatterFile<string>;
}> => {
  const md = await gistClient.get<string>(
    // TODO put to config/envvar
    '/161c912b6342950880064ae199dc2ea7/raw'
  );

  const mattered = matter(md, { excerpt: true });

  const processed = await unified()
    .use(remarkParse)
    .use(remarkUnwrapImages)
    .use(remarkAttr)
    .use(remarkHtml)
    .process(mattered.content);

  const html = processed.toString();

  return { md, html, processed, matter: mattered };
};
