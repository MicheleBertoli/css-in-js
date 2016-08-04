import React from 'react'
import cssobj from 'cssobj'

const obj = {
  '.container':{
    textAlign: 'center'
  },
  '.button':{
    // auto vendor prefix below
    appearance: 'none',
    backgroundColor: '#ff0000',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    '&:hover': {
      color: '#fff',
    },
    '&:active': {
      position: 'relative',
      top: '2px'
    },
    '@media (max-width: 480px)': {
      width: '160px'
    }
  }
}

class Button extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      result: cssobj(obj, {
        local: true
      })
    }
  }

  mapClass(list) {
    return this.state.result.mapClass(list)
  }

  render() {
    return (
      <div className={this.mapClass('container')}>
        <button className={this.mapClass('button')}>
          Click me!
        </button>
      </div>
    )
  }
}

React.render(<Button />, document.getElementById('content'))


