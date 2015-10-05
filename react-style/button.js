// https://github.com/js-next/react-style-webpack-plugin/issues/14
const React = require('react');
const StyleSheet = require('react-style');

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ff0000',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none'
  },
  '@media (max-width: 480px)': {
    button: {
      width: '160px'
    }
  }
});

const Button = React.createClass({
  render() {
    return (
      <div styles={styles.container}>
        <button styles={styles.button}>Click me!</button>
      </div>
    );
  }
});

if (typeof window !== 'undefined') {
  React.render(<Button />, document.getElementById('content'));
}
