import React from 'react';
import { render } from 'react-dom';

const Container = ({ children }) => (
  <div>
    <div className="container">{children}</div>
    <style jsx>{`
      .container {
        text-align: center;
      }
    `}</style>
  </div>
)

const Button = () => (
  <div>
    <button className="button">Click me!</button>
    <style jsx>{`
      .button {
        background-color: #ff0000;
        width: 320px;
        padding: 20px;
        border-radius: 5px;
        border: none;
        outline: none;
      }

      .button:hover {
        color: #fff;
      }

      .button:active {
        position: relative;
        top: 2px;
      }

      @media (max-width: 480px) {
        .button {
          width: 160px
        }
      }
    `}</style>
  </div>
);

const App = () => (
  <Container>
    <Button>Click me!</Button>
  </Container>
);

render(<App />, document.getElementById('content'));
