// store.js
import { configureStore } from "@reduxjs/toolkit";
import { changeState } from "./reducers";

const store = configureStore({
  reducer: changeState,
});

export default store;
