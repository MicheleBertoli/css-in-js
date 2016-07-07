import React from 'react'
import { createComponent } from 'react-fela'

const input = props => ({
  padding: 8,
  paddingLeft: 15,
  outline: 'none',
  fontSize: 18,
  textAlign: 'center',
  color: 'blue',
  ':focus': {
    backgroundColor: 'rgba(0,0, 255, 0.05)'
  }
})

export default createComponent(input, 'input', [ 'onInput', 'placeholder' ])
