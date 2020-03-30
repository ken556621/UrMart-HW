import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./app/AppContainer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();
