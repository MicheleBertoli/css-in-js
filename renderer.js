import { createRenderer } from 'fela'
import prefixer from 'fela-plugin-prefixer'
import fallbackValue from 'fela-plugin-fallback-value'
import unit from 'fela-plugin-unit'

export default () => {
  const plugins = [ prefixer(), fallbackValue(), unit() ]
  const renderer = createRenderer({ plugins: plugins })

  renderer.renderStatic({
    fontFamily: 'Lato',
    boxSizing: 'border-box',
    alignItems: 'stretch',
    fontSize: 15,
    flexShrink: 0,
    margin: 0,
    padding: 0
  }, '*')
  renderer.renderStatic({
    display: 'flex',
    flexDirection: 'column'
  }, 'div')
  renderer.renderStatic({
    outline: 'none',
    textDecoration: 'none',
    color: 'blue'
  }, 'a')
  renderer.renderStatic({ color: 'darkblue' }, 'a:hover')
  renderer.renderStatic({ width: '100%', height: '100%' }, 'html,body,#app')
  renderer.renderStatic({ alignItems: 'center' }, '#app')

  return renderer
}
