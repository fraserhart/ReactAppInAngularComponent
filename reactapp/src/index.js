import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import singleSpaReact from "single-spa-react";

const domElementGetter = () => {
  var el = document.getElementById("root");
  if (!el) {
    el = document.createElement("div");
    el.id = "root";
    document.body.appendChild(el);
  }
  return el;
};

const app = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: domElementGetter,
  rootComponent: App,
  App
});

export const bootstrap = app.bootstrap;
export const mount = app.mount;
export const unmount = app.unmount;
