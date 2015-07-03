import React from 'react';
import {Component} from 'reactcss';

class Button extends Component {
  classes() {
    return  {
      'default': {
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
        }
      }
    }
  }
  render() {
    return (
      <div is="container">
        <button is="button">Click me!</button>
      </div>
    );
  }
}

React.render(<Button />, document.getElementById('content'));
