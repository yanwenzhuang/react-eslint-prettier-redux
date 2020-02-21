import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import store from "./store.js";
import PureReduxCounter from "./component/sample/pureRedux/PureReduxCounter";
import CounterComponent from "./component/sample/React-redux/CounterComponent";
import UserListComponent from "./component/sample/Async-Redux/UserListComponent.jsx";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserListComponent />
      </div>
    </Provider>
  );
}

export default App;
