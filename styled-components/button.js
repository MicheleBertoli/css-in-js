import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #ff0000;
  width: 320px;
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  &:hover {
    color: #fff;
  }
  &:active {
    position: relative;
    top: 2px;
  }
  @media (max-width: 480px) {
    width: 160px;
  }
`;

const App = () => (
  <Container>
    <Button>Click me!</Button>
  </Container>
);

render(<App />, document.getElementById('content'));
