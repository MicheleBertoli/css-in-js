import React from 'react';
import { render } from 'react-dom';
import { style, media } from 'typestyle';

const container = style({
  textAlign: 'center'
});

const Container = ({ children }) => (
  <div>
    <div className={container}>{children}</div>
  </div>
)

const button = style({
  backgroundColor: '#ff0000',
  width: '320px',
  padding: '20px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',

  $nest: {
    '&:hover': {
      color: '#fff'
    },

    '&:active': {
      position: 'relative',
      top: '2px'
    }
  },
}, media({ maxWidth: 480 }, {
  width: '160px'
}));

const Button = () => (
  <div>
    <button className={button}>Click me!</button>
  </div>
);

const App = () => (
  <Container>
    <Button>Click me!</Button>
  </Container>
);

render(<App />, document.getElementById('content'));
