import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    const attrs = {
      container: {
        className: PreStyle`
          text-align: center;
        `
      },
      button: {
        className: PreStyle`
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
        `
      },
    };
    return (
      <div {...attrs.container}>
        <button {...attrs.button}>Click me!</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('content'));
