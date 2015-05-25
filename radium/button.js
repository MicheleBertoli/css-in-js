import React from 'react';
import Radium from 'radium';

let styles = {
  button: {
    backgroundColor: '#ff0000',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    ':hover': {
      color: '#fff',
    },
    ':active': {
      position: 'relative',
      top: '2px'
    },
    '@media (max-width: 480px)': {
      width: '160px'
    }
  }
};

let Button = React.createClass(Radium.wrap({
  render() {
    return <button style={styles.button}>Click me!</button>;
  }
}));

React.render(<Button />, document.getElementById('content'));
