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
  outline: 'none',
  active: {
    color: '#fff',
    position: 'relative',
    top: '2px'
  },
}))

class Button extends Component {
  constructor() {
    super()
    this.state = {active: false}
  }

  handleClick = () => {
    this.setState({active: !this.state.active})
  }

  render() {
    const {active} = this.state

    return (
      <div style={theme.getStyle('container')}>
        <button
          style={theme.getStyle('button', {active})}
          onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    )
  }
}

React.render(<Button />, document.getElementById('content'))
