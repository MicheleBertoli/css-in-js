import React, {Component} from 'react';
import {styles} from 'react-statics-styles';

@styles({
  '.container': {
    textAlign: 'center'
  },
  '.button': {
    backgroundColor: '#ff0000',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none'
  },
  '.button:hover': {
    color: '#fff'
  },
  '.button:active': {
    position: 'relative',
    top: '2px'
  }
})
class Button extends Component {
  static displayName = 'Button';
  render() {
    return (
      <div className="container">
        <button className="button">Click me!</button>
      </div>
    );
  }  
}

if (typeof window !== 'undefined') {
  React.render(<Button />, document.getElementById('content'));
}

export default Button;
