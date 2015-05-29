import React from 'react';
import StyleSheet from 'react-inline';

class Button extends React.Component {
  render() {
    return (
      <div className="container">
        <button className={styles.button}>Click me!</button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: '6px 12px',
    fontSize: 14,
    lineHeight: 1.5,
    touchAction: 'manipulation',
    cursor: 'pointer',
    userSelect: 'none',
    border: '1px solid transparent',
    borderRadius: 4,
    color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#2e6da4',

    '@media only screen and (max-width: 640px)': {
      display: 'block',
      width: '100%'
    },

    ':focus': {
      color: '#fff',
      backgroundColor: '#286090',
      borderColor: '#122b40',
      outline: 'thin dotted',
      outlineOffset: -2
    },

    ':hover': {
      color: '#fff',
      backgroundColor: '#286090',
      borderColor: '#204d74',
      textDecoration: 'none'
    },

    ':active': {
      color: '#fff',
      backgroundColor: '#286090',
      borderColor: '#204d74',
      backgroundImage: 'none',
      outline: 0,
      boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',

      ':hover': {
        color: '#fff',
        backgroundColor: '#204d74',
        borderColor: '#122b40'
      }
    },

    '[disabled]': {
      backgroundColor: '#337ab7',
      borderColor: '#2e6da4',
      cursor: 'not-allowed',
      filter: 'alpha(opacity=65)',
      boxShadow: 'none',
      opacity: .65,
      pointerEvents: 'none'
    }
  }
});

React.render(<Button />, document.getElementById('content'));
