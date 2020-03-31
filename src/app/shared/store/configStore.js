import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";

import listReducer from "../../shared/reducers/ListsReducer";


const initiaState = {};

const store = createStore(
    listReducer,
    initiaState,
    composeWithDevTools(
      offline(offlineConfig)
    )
  );

export default store;