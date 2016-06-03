import React from 'react';
import ReactDOM from 'react-dom';
import { createStylesRenderer, StyleSheet, registerPlugin } from 'vstyle';
import { StylesRendererProvider, withRenderStyles } from 'react-vstyle';
import nestedSelectorPlugin from 'vstyle/lib/plugins/nested-selector';
import mediaQueryPlugin from 'vstyle/lib/plugins/media-query';
import prefixer from 'vstyle/lib/plugins/prefixer';

registerPlugin(nestedSelectorPlugin);
registerPlugin(mediaQueryPlugin);
registerPlugin(prefixer);

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ff0000',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    '&:hover': {
      color: '#fff'
    },
    '&:active': {
      position: 'relative',
      top: '2px'
    },
    '@media (max-width: 480px)': {
      width: '160px'
    }
  }
});

const Button = withRenderStyles(({ renderStyles }) => (
  <div className={renderStyles(styles.container)}>
    <button className={renderStyles(styles.button)}>Click me!</button>
  </div>
))

const stylesRenderer = createStylesRenderer();
stylesRenderer.attach(document.getElementById('style'));

ReactDOM.render(
  <StylesRendererProvider stylesRenderer={stylesRenderer}>
    <Button />
  </StylesRendererProvider>,
  document.getElementById('content')
);
