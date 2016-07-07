import React from 'react'
import { createComponent } from 'react-fela'

const header = props => ({
  color: 'rgb(50, 50, 50)',
  width: '100%',
  textAlign: 'center',
  fontSize: 40,
  padding: '20px 0 10px 0'
})

export default createComponent(header)
