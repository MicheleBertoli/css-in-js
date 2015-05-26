import React from 'react';
import FreeStyle from 'react-free-style';

let Style = FreeStyle.create();

let CONTAINER_STYLE = Style.registerStyle({
  textAlign: 'center'
});

let BUTTON_STYLE = Style.registerStyle({
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

let Button = React.createClass({
  render() {
    return (
      <div className={CONTAINER_STYLE.className}>
        <button className={BUTTON_STYLE.className}>Click me!</button>
        <Style.Element />
      </div>
    );
  }
});

Button = Style.component(Button);

React.render(<Button />, document.getElementById('content'));
