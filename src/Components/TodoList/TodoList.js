import React from "react";
import Todo from "../Todo/index.js";
import "./TodoList.css";

const TodoList = ({ todos, deleteHandler, completeHandler, categoryList, filteredTodos, filterHandler }) => {
  const todoList = filteredTodos.length > 0 ? filteredTodos : todos
  return (
    <div className="todoListContainer">
      <div>
        <select onChange={filterHandler} name="todos" className="filteredTodos">
          <option value={'all'}>All</option>
          {categoryList.length > 0 &&
            categoryList.map((category, idx) => {
              return <option value={category.id} key={idx}>{category.text}</option>;
            })}
        </select>
      </div>
      <ul style={{ listStyleType: "none" }}>
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <Todo
              todo={todo}
              deleteHandler={deleteHandler}
              completeHandler={completeHandler}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
