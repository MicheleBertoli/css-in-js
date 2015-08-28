import React, {Component} from 'react';
import styleable from 'react-styleable'

@styleable(require('./button.css'))
class Button extends Component {
  render() {
    const {css} = this.props;
    return (
      <div className={css.container}>
        <button className={css.button}>Click me!</button>
      </div>
    );
  }
};

React.render(<Button />, document.getElementById('content'));
