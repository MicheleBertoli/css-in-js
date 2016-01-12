import React from 'react';
import j2c from 'j2c';

const styles = j2c.sheet({
  '.container': {
    'text-align': 'center'
  },
  '.button': {
    'background-color': '#ff0000',
    width: '320px',
    padding: '20px',
    'border-radius': '5px',
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
});

const Button = React.createClass({
  render() {
    return (
      <div>
        <style>{styles.valueOf()}</style>
        <div className={styles.container}>
          <button className={styles.button}>Click me!</button>
        </div>
      </div>
    );
  }
});

React.render(<Button />, document.getElementById('content'));
