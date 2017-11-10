import {createElement as h} from 'react';
import {render} from 'react-dom';
import {Comp} from "./base";

class Button extends Comp {
  css = () => ({
    '.container': {
      ta: 'center',
      '.button': {
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
      },
    },
    '@media (max-width: 480px)': {
      '.container .button': {
        w: '160px',
      },
    },
  });

  render() {
    return (
      h('div', {className: 'container'},
        h('button', {className: 'button'}, 'Click me!')
      )
    );
  }
}

render(h(Button), document.getElementById('content'));
