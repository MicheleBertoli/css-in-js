import React from 'react';
import {render} from 'react-dom';
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

render(<Button />, document.getElementById('content'));
