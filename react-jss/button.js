import React from 'react';
import jss from 'jss';
import vendorPrefixer from 'jss-vendor-prefixer';
import useSheet from 'react-jss';

jss.use(vendorPrefixer);

const styles = {
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
