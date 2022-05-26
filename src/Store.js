import { ConfigureStore, combineReducers } from "redux";

import todos from "./reducer/todo";

const rootReducer = combineReducers({
  todos,
});

const store = ConfigureStore(rootReducer);

export default store;