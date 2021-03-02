import React from 'react';
import { render } from 'react-dom';
import {Container, Button} from './styles.scss';

const App = () => (
  <Container>
    <Button>Click me!</Button>
  </Container>
);

render(<App />, document.getElementById('content'));
