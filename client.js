import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-fela'

import createRenderer from './renderer'
import App from './app'

const renderer = createRenderer()
const mountNode = document.getElementById('stylesheet')

render(
  <Provider renderer={renderer} mountNode={mountNode}>
    <App />
  </Provider>,
  document.getElementById('app')
)
