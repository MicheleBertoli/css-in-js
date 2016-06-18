import React from 'react';
import ReactDOM from 'react-dom';

import './button.css.js';

const Button = () => (
  <div className="container">
    <button className="button">Click me!</button>
  </div>
);

ReactDOM.render(<Button />, document.getElementById('content'));
