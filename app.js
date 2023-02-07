import { createStore, actionCreator } from "./redux.js";
import { reducer } from "./reducer.js";
import * as Actions from "./actions.js";
const store = createStore(reducer);

store.subscribe(() => {
  console.log("sub => ", store.getState());
});

store.dispath(Actions.increase());
console.log("dispath => ", store.getState());
store.dispath(Actions.decrease());
console.log("dispath => ", store.getState());
store.dispath(Actions.decrease());
console.log("dispath => ", store.getState());
store.dispath(Actions.decrease());
console.log("dispath => ", store.getState());
store.dispath(Actions.reset());
console.log("dispath => ", store.getState());
