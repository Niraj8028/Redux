import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

import { connect } from "react-redux";
import { removeTodo } from "../Reducer/action/Todos";

const Todo = ({ todos, markComplete }) => {
    return (
      <ListGroup className="mt-5 mb-2">
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
            <span className="float-right" onClick={() => markComplete(todo.id)}>
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  };
  
  const mapStateToProps = (state) => ({
    todos: state.todos,
  });
   
  const mapDispatchToProps = (dispatch) => ({
    markComplete: (id) => {
      dispatch(removeTodo(id));
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Todo);