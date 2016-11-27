import React from 'react';
import { render } from 'react-dom';
import Uranium from 'uranium';

const styles = {
  container: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ff0000',
    width: 320,
    padding: 20,
    borderRadius: 5,
    border: 'none',
    outline: 'none',
    '@media (max-width: 480px)': {
      width: 160
    }
  }
};

const Button = Uranium(() => (
  <div css={styles.container}>
    <button css={styles.button}>
      Click me!
    </button>
  </div>
));

render(<Button />, document.getElementById('content'));
