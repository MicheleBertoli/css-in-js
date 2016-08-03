import React from 'react'
import cssobj from 'cssobj'
import cssText from 'cssobj-plugin-post-csstext'

const obj = {
  '.container':{
    textAlign: 'center'
  },
  '.button':{
    // auto vendor prefix below
    appearance: 'none',
    boxReflect: 'below 4px linear-gradient(transparent, white)',
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
      obj: obj,
      result: cssobj(obj, {
        local: true,
        onUpdate: cssText(updateResult)
      })
    }
    this.updateCSS = this.updateCSS.bind(this)
  }

  mapClass(list) {
    return this.state.result.mapClass(list)
  }

  updateCSS() {
    this.state.obj['.button'].fontSize = 16 + Math.random()*20 + 'px'
    this.state.result.update()
  }

  render() {
    return (
      <div className={this.mapClass('container')} onClick={this.updateCSS}>
        <button className={this.mapClass('button')}>
          [+ click me +]
        </button>
      </div>
    )
  }
}

React.render(<Button />, document.getElementById('content'))



// helper function to display cssText from CSSOM

function updateResult (css){ document.getElementById('result').value = css }
