import React from 'react';
import StyleSheet from 'stilr';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
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
    ['@media (max-width: 480px)']: {
      width: '160px'
    }
  }
});

const Button = React.createClass({
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.button}>Click me!</button>
      </div>
    );
  }
});

if (typeof window !== 'undefined') {
  React.render(<Button />, document.getElementById('content'));
}
