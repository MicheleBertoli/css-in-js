import React from 'react'
import { createComponent } from 'react-fela'

const green = 'rgba(0, 200, 0, 0.3)'

const filter = props => ({
  padding: 5,
  border: '1px solid gray',
  margin: '0 2px',
  backgroundColor: props.active ? green : 'transparent',
  borderRadius: 8,
  userSelect: 'none',
  cursor: 'pointer',
  fontSize: 13
})

export default createComponent(filter, 'div', [ 'onClick' ])
