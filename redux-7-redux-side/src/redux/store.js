import { createStore, combineReducers } from "redux";
import todos from "./reducer/todos.reducer";

let rootReducer = combineReducers({
  todos: todos
});

export default createStore(rootReducer);
