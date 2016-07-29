import React from 'react';
import ReactDOM from 'react-dom';
import { style, hover, active, media } from 'glamor';

const button = {
  backgroundColor: '#ff0000',
  width: 320,
  padding: 20,
  borderRadius: 5,
  border: 'none',
  outline: 'none'
};

const Button = () => (
  <div {...style({ textAlign: 'center' })}>
    <button
      {...style(button)}
      {...hover({ color: '#fff' })}
      {...active({ position: 'relative', top: 2 })}
      {...media('(max-width: 480px)', { width: 160 })}
    >
      Click me!
    </button>
  </div>
);

ReactDOM.render(<Button />, document.getElementById('content'));
