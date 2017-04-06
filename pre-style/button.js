import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

const styles = {
  container: PreStyle`
    text-align: center;
  `,
  button: PreStyle`
    background-color: $bgc; //<- Look Sass in my JS :D
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 20px;
    width: 320px;

    &:hover {
      color: $hoverBgc;
    }

    &:active {
      position: relative;
      top: 2px;
    }

    @media (max-width: 480px) {
      width: 160px;
    }
  `
};

const Component = () => (
  <div className={styles.container}>
    <button className={styles.button}>Click me!</button>
  </div>
);

ReactDOM.render(<Component />, document.getElementById('content'));
