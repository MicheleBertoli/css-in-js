import React from 'react';
import { render } from 'react-dom';
import { css, include, styles } from 'linaria';

const container = css`
  text-align: center;
`;

const button = css`
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
  <div {...styles(container)}>
    <button {...styles(button)}>
      Click me!
    </button>
  </div>
);

render(<App />, document.getElementById('content'));
