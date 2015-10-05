import React from 'react';
import StyleSheet from 'react-inline';

const styles = StyleSheet.create({
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
});

class Button extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.button}>Click me!</button>
      </div>
    );
  }
}

React.render(<Button />, document.getElementById('content'));
