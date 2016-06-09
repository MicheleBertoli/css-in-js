import React, { Component } from 'react';
import reactCSS from 'reactcss';

class Button extends Component {
  render() {
    const styles = reactCSS({
      'default': {
        button: {
          backgroundColor: '#333',
          padding: '20px',
          borderRadius: '5px',
          border: 'none',
          outline: 'none',
          width: '100%'
        },
      },
      'color-red': {
        button: {
          backgroundColor: '#ff0000',
        },
      },
    }, this.props)

    return <button style={ styles.button }>{ this.props.label }</button>
  }
}

class Container extends Component {
  render() {
    const styles = reactCSS({
      'default': {
        container: {
          width: '320px',
          margin: '0px auto',
        },
      },
    })

    return (
      <div style={ styles.container }>
        <Button label="Click me!" color="red" />
      </div>
    )
  }
}

React.render(<Container />, document.getElementById('content'));
