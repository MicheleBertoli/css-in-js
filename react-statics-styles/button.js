import React from 'react';

let Button = React.createClass({

  statics: {
    styles: {
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
        color: '#fff' },
      '.button:active': {
        position: 'relative',
        top: '2px'
      }
    }
  },

  render() {
    return (
      <div className="container">
        <button className="button">Click me!</button>
      </div>
    );
  }

});

if (typeof window !== 'undefined') {
  React.render(<Button />, document.getElementById('content'));
}

module.exports = Button;
