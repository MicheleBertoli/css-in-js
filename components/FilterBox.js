import React from 'react'
import { createComponent } from 'react-fela'

const filterbox = props => ({
  padding: 8,
  outline: 'none',
  fontSize: 16,
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'auto',
  justifyContent: 'center',
  '@media (max-width: 1164px)': {
    justifyContent: 'flex-start'
  }
})

export default createComponent(filterbox, 'div')
