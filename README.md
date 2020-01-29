## Set up Angular

```
ng new [app name]
cd [app name]
npm i single-spa
ng generate component react-container
```

app-routing.module.ts

```
import { ReactContainerComponent } from "./react-container/react-container.component";
const routes: Routes = [{ path: "react", component: ReactContainerComponent }];
```

react-container-component.ts

```
import { registerApplication, start } from "single-spa";
.
.
ngOnInit() {
  const loadingFunction = () => {
    return import("../../../reactapp/build/static/js/main.js"); //this is the location of the bundled React application
  };
  const activityFunction = () => {
    return true;
  };
  registerApplication("reactApp", loadingFunction, activityFunction);
  start();
}
```

react-container-component.ts
add

```
<div id="root"></div>
```

## Set up React

```
new react app: npx create-react-app [app name]
cd [app name]
npm i single-spa-react
npm run eject #😱
```

webpack.conf

```
.
.
output: {
  .
  .
  .
  .
  libraryTarget: "umd" //add this
}
.
.
```

remove optimisation block

remove new HTMLWebpackPlugin

remove:

```
  isEnvProduction &&
    shouldInlineRuntimeChunk &&
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
```

for simplicity, remove the content hash from the build:

```
filename: isEnvProduction
? "static/js/[name].[contenthash:8].js"
```

index.js

```
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
```
