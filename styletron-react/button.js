import React from 'react';
import { render } from 'react-dom';
import { styled, StyletronProvider } from 'styletron-react';
import Styletron from 'styletron-client';

const Container = styled('div', {
  textAlign: 'center',
});

const Button = styled('button', {
  backgroundColor: '#ff0000',
  width: '320px',
  padding: '20px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',
  ':hover': {
    color: '#fff',
  },
  ':active': {
    position: 'relative',
    top: '2px',
  },
  '@media (max-width: 480px)': {
    width: '160px',
  },
});

const App = () => (
  <Container>
    <Button>Click me!</Button>
  </Container>
);

const styleElements = document.getElementsByClassName('_styletron_hydrate_');

render(
  <StyletronProvider styletron={new Styletron(styleElements)}>
    <App />
  </StyletronProvider>,
  document.getElementById('content')
);
