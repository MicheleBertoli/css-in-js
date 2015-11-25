import React, { Component } from 'react';
import Look, { StyleSheet } from 'react-look/dom';

class Button extends Component {
  render() {
    return (
      <div look={styles.container}>
        <button look={styles.button}>Click me!</button>
      </div>
    );
  }
}

const styles = StyleSheet.create(Button, {
  container: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ff0000',
    width: 320,
    padding: 20,
    borderRadius: 5,
    border: 'none',
    outline: 'none',
    ':hover': {
      color: '#fff'
    },
    ':active': {
      position: 'relative',
      top: 2
    },
    '@media (max-width: 480px)': {
      width: 160
    }
  }
})

Button = Look(Button);

React.render(<Button />, document.getElementById('content'));
