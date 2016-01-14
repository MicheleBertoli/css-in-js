import React, {Component} from 'react';
import scopeStyles from 'scope-styles-inject';

const styles = {
  container: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ff0000',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    ':hover': {
      color: '#fff',
    },
    ':active': {
      position: 'relative',
      top: '2px'
    },
    '@media (max-width: 480px)': {
      width: '160px'
    }
  }
};

const scoped = scopeStyles(styles); 

class Button extends Component {
  render() {
    return (
      <div className={scoped.container}>
        <button className={scoped.button}>Click me!</button>
      </div>
    );
  }
}

React.render(<Button />, document.getElementById('content'));
