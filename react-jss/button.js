import React from 'react';
import useSheet from 'react-jss';

let styles = {
  '.container': {
    'text-align': 'center'
  },
  '.button': {
    'background-color': '#ff0000',
    width: '320px',
    padding: '20px',
    'border-radius': '5px',
    border: 'none',
    outline: 'none'
  },
  '.button:hover': {
    color: '#fff',
  },
  '.button:active': {
    position: 'relative',
    top: '2px'
  },
  '@media (max-width: 480px)': {
    '.button': {
      width: '160px'
    }
  }
};

let Button = React.createClass({
  render() {
    return (
      <div className="container">
        <button className="button">Click me!</button>
      </div>
    );
  }
});

Button = useSheet(Button, styles, {named: false});

React.render(<Button />, document.getElementById('content'));
