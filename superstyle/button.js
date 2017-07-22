import React from 'react';
import ReactDOM from 'react-dom';
import superstyle from 'superstyle/react';

const Container = superstyle({
  textAlign: 'center'
})('div');

const Button = superstyle({
  backgroundColor: '#ff0000',
  width: 320,
  padding: 20,
  borderRadius: 5,
  border: 'none',
  outline: 'none',
})('button');

ReactDOM.render(
  <Container>
    <Button>Click me!</Button>
  </Container>,
  document.getElementById('content')
);
