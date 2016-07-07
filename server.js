import express from 'express'
import proxy from 'express-http-proxy'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-fela'
import fs from 'fs'

import createRenderer from './renderer'
import App from './app'

const app = express()

app.use('/bundle.js', proxy('localhost:8080', {
  forwardPath: () => '/bundle.js'
}))

app.get('/', (req, res) => {
  const renderer = createRenderer()

  const indexHTML = fs.readFileSync(__dirname + '/index.html').toString()
  const appHtml = renderToString(
    <Provider renderer={renderer}>
      <App />
    </Provider>
  )
  const appCSS = renderer.renderToString()

  res.write(indexHTML.replace('<!-- {{app}} -->', appHtml).replace('<!-- {{css}} -->', appCSS))
  res.end()
})

app.listen(8000, 'localhost', () => {
  console.log('Access the universal app at http://%s:%d', 'localhost', 8000)
})
