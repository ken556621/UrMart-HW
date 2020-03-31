import { createStore } from "redux";

import ListsReducer from "../reducers/ListsReducer";


const initiaState = {};

const store = createStore(
    ListsReducer,
    initiaState
  );

export default store;