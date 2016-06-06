import {writeFileSync} from 'fs'
import {resolve} from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StyleSheetServer} from 'aphrodite'
import Button from '../button'

generateCSSFile(
  <Button />,
  resolve(__dirname, '../bundle.css')
);

function generateCSSFile(comp, destination) {
  const {html, css} = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToStaticMarkup(comp);
  });
  // in a universal React App, you'll probably want to do something with the `html` too.
  writeFileSync(destination, css.content);
}
