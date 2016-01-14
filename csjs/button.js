import React, {Component} from 'react';
import styles from './styles';

const Button = React.createClass({
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.button}>Click me!</button>
      </div>
    );
  }
});

React.render(<Button />, document.getElementById('content'));
