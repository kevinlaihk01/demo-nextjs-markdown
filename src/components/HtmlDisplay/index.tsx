import { fromParse5 } from 'hast-util-from-parse5';
import { select as hastSelect } from 'hast-util-select';
import { parse } from 'parse5';
import React, { Fragment } from 'react';
import rehype2react from 'rehype-react';
import unified from 'unified';

const customCreateElement = (tagName, props, ...params) => {
  return React.createElement(tagName, props, ...params);
};

function parser(doc, file) {
  return file;
}

function parseFromHast() {
  this.Parser = parser;
}

const reactProcessor = unified()
  .use(parseFromHast)
  .use(rehype2react, { createElement: customCreateElement });

export interface Props {
  html: string;
}

const HtmlDisplay: React.FC<Props> = (props) => {
  const { html } = props;

  if (!html) return null;

  const ast = parse(html || '');
  const hast = fromParse5(ast);
  const bodyHast = hastSelect('body', hast);
  // select the first image as cover
  // const coverHast = hastSelect('img', hast);

  const blocks = bodyHast?.children;

  return (
    <div>
      {blocks
        ?.map((block) => {
          if (block.type === 'comment') return null;

          if (block.type !== 'element') return block.value;

          return reactProcessor.processSync(block)
            ?.result as React.ReactElement;
        })
        .map((blockElement, index) => (
          <Fragment key={index}>{blockElement}</Fragment>
        ))}
    </div>
  );
};

export default React.memo<Props>(HtmlDisplay);
