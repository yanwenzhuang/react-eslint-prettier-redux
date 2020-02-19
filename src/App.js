import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import store from "./component/sample/React-redux/store.js";
import PureReduxCounter from "./component/sample/pureRedux/PureReduxCounter";
import CounterComponent from "./component/sample/React-redux/CounterComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
      </div>
    </Provider>
  );
}

export default App;
