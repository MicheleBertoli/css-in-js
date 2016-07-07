import React from 'react'
import { createComponent } from 'react-fela'

const red = 'rgba(200, 0,0, 0.3)'
const green = 'rgba(0, 200, 0, 0.3)'

const cell = props => ({
  textAlign: props.alignRight ? 'right' : props.alignLeft ? 'left' : 'center',
  alignItems: props.alignRight ? 'flex-end' : props.alignLeft ? 'flex-start' : 'center',
  justifyContent: 'center',
  fontWeight: props.bold ? 'bold' : 'normal',
  padding: 6,
  flex: props.flex || 1,
  fontSize: props.header ? 13 : 15,
  borderRight: '1px solid lightgray',
  backgroundColor: props.isBool ? (props.value ? green : red) : 'transparent',
  overflow: 'hidden',
  userSelect: 'none',
  color: props.toggle ? 'gray' : 'black',
  cursor: props.header || props.toggle ? 'pointer' : 'inherit',
  ':first-child': {
    borderRightWidth: 0
  },
  ':nth-child(2)': {
    borderRightWidth: 2
  },
  ':last-child': {
    borderRightWidth: 0
  }
})

export default createComponent(cell, 'div', [ 'onClick' ])
