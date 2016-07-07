import React from 'react'
import { createComponent } from 'react-fela'

const row = props => ({
  flexDirection: 'row',
  borderBottom: (props.header ? 2 : 1) + 'px solid lightgray',
  ':hover': {
    backgroundColor: props.header ? 'transparent' : 'rgba(150, 150, 150, 0.2)'
  }
})

export default createComponent(row)
