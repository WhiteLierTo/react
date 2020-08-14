import React, { Component } from "react";
import Proptypes from "prop-types";

export default class Todoitem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDelete() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  render() {
    const { content } = this.props;
    return <div onClick={this.handleDelete.bind(this)}>{content}</div>;
  }
}

Todoitem.propTypes = {
  content: Proptypes.string,
  deleteItem: Proptypes.func,
  index: Proptypes.number,
};
