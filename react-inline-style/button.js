import React from 'react';
import Style from 'react-inline-style';

let styles = Style.define({
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
    hover: {
      color: '#fff'
    },
    pressed: {
      position: 'relative',
      top: '2px'
    }
  }
});

styles = styles.global({
  '@media (max-width: 480px)': {
    'button': {
      width: '160px !important'
    }
  }
})

const Button = React.createClass({
  mixins: [styles()],
  render() {
    return (
      <div style={this.style('container')}>
        <button style={this.style('button', 'button.hover:hover', 'button.pressed:pressed')}>
          Click me!
        </button>
      </div>
    );
  }
});

React.render(<Button />, document.getElementById('content'));
