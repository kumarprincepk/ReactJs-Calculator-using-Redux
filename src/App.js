import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import {store} from './redux/Store'
import {Provider} from 'react-redux'
import Sci_fyCalcy from "./components/Sci_fyCalcy";

function App() {
  return (
    <>
    <Sci_fyCalcy/>
    <Provider store={store}>
      <Calculator/>
    </Provider>
    </>
  );
}

export default App;
