import React, {Component} from 'react'
import Theme from 'react-theme'

const theme = new Theme()

theme.setSource('container', () => ({
  textAlign: 'center'
}))

theme.setSource('button', () => ({
  backgroundColor: '#ff0000',
  width: '320px',
  padding: '20px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none'
}))

class Button extends Component {
  render() {
    return (
      <div style={theme.getStyle('container')}>
        <button style={theme.getStyle('button')}>
          Click me!
        </button>
      </div>
    )
  }
}

React.render(<Button />, document.getElementById('content'))
