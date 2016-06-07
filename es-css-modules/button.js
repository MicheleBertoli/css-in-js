import React from 'react';
import {container, button} from './button.m.css';

const Button = React.createClass({
  render() {
    return (
      <div className={container}>
        <button className={button}>Click me!</button>
      </div>
    );
  }
});

React.render(<Button />, document.getElementById('content'));
