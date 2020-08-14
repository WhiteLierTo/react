import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["学习雷锋好榜样!", "苏州"],
    };
    this.submit = this.submit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  submit() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: "",
    // });
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: "",
    }));
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  deleteHandle(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list,
      };
    });
    // this.setState({
    //   list: list,
    // });
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div>
          <TodoItem
            content={item}
            index={index}
            key={index}
            deleteItem={this.deleteHandle.bind(this)}
          />
          {/*<li
          key={index}
          onClick={this.delete.bind(this, index)}
          dangerouslySetInnerHTML={{ __html: item }}
        ></li>*/}
        </div>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.submit}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
}
