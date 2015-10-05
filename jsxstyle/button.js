import React from 'react';
import {Block} from 'jsxstyle';

const styles = {
  button: {
    backgroundColor: '#ff0000',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none'
  }
};

const Button = React.createClass({
  render() {
    return (
      <Block textAlign="center">
        <button style={styles.button}>Click me!</button>
      </Block>
    );
  }
});

React.render(<Button />, document.getElementById('content'));
