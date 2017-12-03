import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

registerServiceWorker();
