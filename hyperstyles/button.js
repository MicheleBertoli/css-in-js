/** @jsx h */

import React, {Component} from 'react';
import hyperstyles from 'hyperstyles';

import styles from './button.css';

const h = hyperstyles(React.createElement, styles);

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
