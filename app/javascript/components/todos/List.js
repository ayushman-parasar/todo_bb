import React from "react";
import PropTypes from "prop-types";
class List extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.todos
            ? this.props.todos.map((todo,index) => {
                return <li key={index}>{todo.title}</li>;
              })
            : null}
        </ul>
        <a href="/todos/new">Add New</a>
      </>
    );
  }
}

export default List;
