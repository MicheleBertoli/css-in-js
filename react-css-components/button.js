import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button } from './styles.react.css';

const Component = () => (
  <Container>
    <Button>Click me!</Button>
  </Container>
);

ReactDOM.render(<Component />, document.getElementById('content'));
