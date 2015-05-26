import React from 'react';
import StyleSheet from 'stilr';

const breakpoint = '@media (max-width: 480px)';
let styles = StyleSheet.create({
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
    [breakpoint]: {
      width: '160px !important'
    }
  }
});

let Button = React.createClass({
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.button}>Click me!</button>
      </div>
    );
  }
});

if (typeof window !== 'undefined') {

  // If running in production and a seperate stylesheet is required,
  // extract the stylesheet by running `make extract-styles`

  let stylesheet = document.createElement('style');
  stylesheet.textContent = StyleSheet.render();
  document.head.appendChild(stylesheet);

  React.render(<Button />, document.getElementById('content'));
}
