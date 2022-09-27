import React from "react";
import Category from "../Category";
import "./Todo.css";

const Todo = ({
  todo,
  deleteHandler,
  editHandler,
  completeHandler,
  category,
  categoryText,
}) => {
  return (
    <li className="Todo">
      <div className="todoItem">
        <div className="todoInfos">
          <div className="todoContent">{todo.text}</div>
          <div className="todoContent">{todo.status}</div>
        </div>
        <button
        onClick={(e) => completeHandler(e,todo.id)}
        className={`completeButton ${todo.completed ? "completed" : ""}`}
      >
        <img src="/svg/Check.png" />
      </button>
      <button onClick={(e) => editHandler(e, todo.id)} className="editButton">
        <img src="/svg/Edit.png" />
      </button>
      <button
        onClick={(e) => deleteHandler(e, todo.id)}
        className="deleteButton"
      >
        <img src="/svg/Cross.png" />
      </button>
      </div>

     
    </li>
  );
};

export default Todo;
