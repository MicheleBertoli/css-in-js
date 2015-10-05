import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './button.css';

@CSSModules(styles)
class Button extends Component {
  render() {
    return (
      <div styleName="container">
        <button styleName="button">Click me!</button>
      </div>
    );
  }
};

React.render(<Button />, document.getElementById('content'));
