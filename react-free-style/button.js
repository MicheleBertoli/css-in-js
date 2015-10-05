import React, {Component} from 'react';
import {create, injectStyle} from 'react-free-style';

const Style = create();

const CONTAINER_STYLE = Style.registerStyle({
  textAlign: 'center'
});

const BUTTON_STYLE = Style.registerStyle({
  backgroundColor: '#ff0000',
  width: '320px',
  padding: '20px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',
  '&:hover': {
    color: '#fff',
  },
  '&:active': {
    position: 'relative',
    top: '2px'
  },
  '@media (max-width: 480px)': {
    width: '160px'
  }
});

@injectStyle(Style)
class Button extends Component {
  render() {
    return (
      <div className={CONTAINER_STYLE.className}>
        <button className={BUTTON_STYLE.className}>Click me!</button>
        <Style.Element />
      </div>
    );
  }
};

React.render(<Button />, document.getElementById('content'));
