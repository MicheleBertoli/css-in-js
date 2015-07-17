import React from 'react';
import Style from 'react-inline-style';

let myStyle = Style.define({

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

myStyle = myStyle.global({

  '@media (max-width: 480px)': {

    'button': {
      width: '160px !important'
    }

  }
  
})


let Button = React.createClass({
  mixins : [myStyle()],
  render() {
    return (
      <div style={this.style('container')}>
        <button style={this.style('button', 'button.hover:hover', 'button.pressed:pressed')}>Click me!</button>
      </div>
    );
  }
});

React.render(<Button />, document.getElementById('content'));
