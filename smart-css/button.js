import React from 'react';
import SmartCSS from 'smart-css';

const css = new SmartCSS();

css.setClass('.container', {
  textAlign: 'center'
});

css.setClass('.button', {
  backgroundColor: '#ff0000',
  width: '320px',
  padding: '20px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none'
});

css.setClass('.button:hover', {
  color: '#fff'
});

css.setClass('.button:active', {
  position: 'relative',
  top: '2px'
});

css.setClass('.button', {
  width: '160px'
}, {
  media: '(max-width: 480px)'
});

const Button = React.createClass({
  render() {
    return (
      <div className={css.getClass('container')}>
        <button className={css.getClass('button')}>Click me!</button>
      </div>
    );
  }
});

SmartCSS.injectStyles();

React.render(<Button />, document.getElementById('content'));
