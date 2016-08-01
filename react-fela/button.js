import { createRenderer } from 'fela';
import { Provider, connect } from 'react-fela';
import { render } from 'react-dom';
import React from 'react';

const container = () => ({
  textAlign: 'center'
});

const button = () => ({
  backgroundColor: '#ff0000',
  width: '320px',
  padding: '20px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',
  ':hover': {
    color: '#fff'
  },
  ':active': {
    position: 'relative',
    top: '2px'
  },
  '@media (max-width: 480px)': {
    width: '160px'
  }
});

const mapStylesToProps = props => renderer => ({
  container: renderer.renderRule(container),
  button: renderer.renderRule(button)
})

const Button = connect(mapStylesToProps)(({ styles }) => (
  <div className={styles.container}>
    <button className={styles.button}>Click me!</button>
  </div>
));

const renderer = createRenderer();
const mountNode = document.getElementById('stylesheet');

render(
  <Provider renderer={renderer} mountNode={mountNode}>
    <Button />
  </Provider>,
  document.getElementById('content')
);
