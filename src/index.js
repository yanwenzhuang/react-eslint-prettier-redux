import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./Calculator";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import store from "./store";

const App = (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
