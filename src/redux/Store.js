import { RootReducer } from "./RootReducer";
import { createStore } from "redux";

let store = createStore(RootReducer)

export {store}