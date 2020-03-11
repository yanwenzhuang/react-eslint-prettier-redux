import React from "react";
import "./Calculator.css";
import store from "./store";

const funs = ["+", "-", "*", "/", "c", "="];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Action(props) {
  return (
    <div className="action">
      {props.funs.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              props.click(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

function Number(props) {
  return (
    <div className="number">
      {props.nums.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              props.click(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState().reducer;
    this.numClick = this.numClick.bind(this);
    this.actionClick = this.actionClick.bind(this);
    // store.subscribe(() => {
    //   this.setState(store.getState());
    // });
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState().reducer);
    });
  }

  render() {
    return (
      <div className="wrap">
        <input value={this.state.inputValue} readOnly />
        <div className="result">{this.state.result}</div>
        <Action funs={funs} click={this.actionClick} />
        <Number nums={nums} click={this.numClick} />
      </div>
    );
  }

  numClick(e) {
    const action = {
      type: "input_number_add",
      value: e,
    };
    store.dispatch(action);
    // const dispatchAddNumber = bindActionCreators(action, store.dispatch);
    // dispatchAddNumber();
  }

  actionClick(e) {
    if (e === "c") {
      const action = {
        type: "clear_input_value",
      };
      store.dispatch(action);
      return;
    }

    if ("=" === e) {
      const action = {
        type: "action_number_result",
      };
      store.dispatch(action);
      return;
    }
    const action = {
      type: "input_number_add",
      value: e,
    };
    store.dispatch(action);
  }
}

export default Calculator;
