import React from "react"
import ReactDOM from "react-dom"
import { createStyleSheet } from "stile"

import { MediaProvider, matchMedia } from "react-media-queries"
import createMediaQueryGetter from "react-media-queries/lib/createMediaQueryGetter"
import createMediaQueryListener from "react-media-queries/lib/createMediaQueryListener"

const Button = ({ mediaQuery }) => (
  <div style={styles.container}>
    <button
      style={{
        ...styles.button,
        ...mediaQuery.small.matches && styles.smallButton,
      }}
    >
      Click me!
    </button>
  </div>
)

const styles = createStyleSheet({
  container: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff0000",
    width: 320,
    padding: 20,
    borderRadius: 5,
    border: "none",
    outline: "none",
  },
  smallButton: {
    width: 160,
  },
})

const WrappedButton = matchMedia()(Button)

const mediaQueries = {
  small: "(max-width:480px)",
}

const mediaQueryGetter = createMediaQueryGetter(mediaQueries)
const mediaQueryListener = createMediaQueryListener(mediaQueries)

ReactDOM.render(
  <MediaProvider
    getMedia={mediaQueryGetter}
    listener={mediaQueryListener}
  >
    <WrappedButton />
  </MediaProvider>,
  document.getElementById('content')
)
