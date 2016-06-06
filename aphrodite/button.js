import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

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
    '@media (max-width: 480px)': {
      width: '160px'
    }
  }
});

export default class Button extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <button className={css(styles.button)}>Click me!</button>
      </div>
    );
  }
}
