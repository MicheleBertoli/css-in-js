import React, {Component} from 'react';
import {render} from 'react-dom';
import {createFreestyler} from 'freestyler';

const css = createFreestyler(React);

const Button = css.styled('button')({
  bg: 'red',
  w: '320px',
  pad: '20px',
  bdrad: '5px',
  bd: 'none',
  outline: 'none',
  '&:hover': {
    col: '#fff',
  },
  '&:active': {
    pos: 'relative',
    top: '2px',
  },
  '@media (max-width: 480px)': {
    '.container &': {
      w: '160px',
    },
  },
});

class Container extends Component {
  @css({
    ta: 'center',
  })
  render() {
    return (
      <div className="container">
        <Button>Click me!</Button>
      </div>
    );
  }
}

render(<Container/>, document.getElementById('content'));
