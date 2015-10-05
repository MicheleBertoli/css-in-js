import React, {Component} from 'react';
import styled from 'bloody-react-styled';

import styles from './button.css';

@styled(styles)
class Button extends Component {
  render() {
    const {locals} = styles;
    return (
      <div className={locals.container}>
        <button className={locals.button}>Click me!</button>
      </div>
    );
  }
};

React.render(<Button />, document.getElementById('content'));
