import './jss';
import React from 'react';
import useSheet from 'react-jss';

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
    '&:hover': {
      color: '#fff'
    },
    '&:active': {
      position: 'relative',
      top: 2
    }
  },
  '@media (max-width: 480px)': {
    button: {
      width: 160
    }
  }
};

let Button = React.createClass({
  render() {
    const {classes} = this.props.sheet
    return (
      <div className={classes.container}>
        <button className={classes.button}>Click me!</button>
      </div>
    );
  }
});

Button = useSheet(Button, styles);

React.render(<Button />, document.getElementById('content'));
