import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./app/AppContainer";
import { Provider } from "react-redux";
import store from "./app/shared/store/configStore";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();
