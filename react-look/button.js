import React, {Component} from 'react';
import Look from 'react-look';

class Button extends Component {
  look() {
    return {
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
    }
  }
  render() {
    return (
      <div look="container">
        <button look="button">Click me!</button>
      </div>
    );
  }
}

Button = Look(Button);

React.render(<Button />, document.getElementById('content'));
