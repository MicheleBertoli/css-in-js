import React from 'react';
import ReactCSSBuilder from 'react-css-builder';

let styles = ReactCSSBuilder.create({
  container: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ff0000',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none'
  }
});

let Button = React.createClass({
  render() {
    return (
      <div style={styles.css('container')}>
        <button style={styles.css('button')}>Click me!</button>
      </div>
    );
  }
});

React.render(<Button />, document.getElementById('content'));
