import React from 'react';
import styles from './button.css';

let Button = React.createClass({
  render() {
    return <button className={styles.button}>Click me!</button>;
  }
});

React.render(<Button />, document.getElementById('content'));
