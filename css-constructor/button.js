import React, { Component } from 'react';
import { render } from 'react-dom';
import css from 'css-constructor';

class Container extends Component {

  @css`
    text-align: center;
  `;

  render() {
    return <div>{this.props.children}</div>;
  }

}

class Button extends Component {

  @css`
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
      & {
        width: 160px;
      }
    }
  `;

  render() {
    return <button>{this.props.children}</button>;
  }

}

const App = () => (
  <Container>
    <Button>Click me!</Button>
  </Container>
);

render(<App />, document.getElementById('content'));
