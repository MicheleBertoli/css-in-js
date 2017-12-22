import React from 'react';
import { render } from 'react-dom';
import style from './button.st.css';

const App = () => (
  <div { ...style('root') }>
    <div className={style.container}>
      <button className={style.button}>
        Click me!
      </button>
    </div>
  </div>
);

render(<App />, document.getElementById('content'));
