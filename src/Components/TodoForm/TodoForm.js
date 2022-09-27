import React from "react";
import "./TodoForm.css";

const TodoForm = ({
  inputText,
  inputTextHandler,
  submitTodoHandler,
  categoryList,
  currentCategory,
  currentCategoryHandler,
  currentStatusHandler,
  currentStatus,
}) => {
  const currentCategoryObj =
    categoryList.length > 0 &&
    categoryList.filter((category) => category.id === currentCategory);

  return (
    <div className="todoForm">
      <form onSubmit={submitTodoHandler}>
        <input
          className="todoInput"
          type="text"
          placeholder="Enter a Todo!"
          onChange={inputTextHandler}
          value={inputText}
        />
        <div className="todoSelect">
          <select
            onChange={currentCategoryHandler}
            value={currentCategory}
            className="todoSelectCategory"
          >
            <option>Choose a category</option>
            {categoryList.length > 0 &&
              categoryList.map((category, idx) => (
                <option value={category.id} key={idx}>
                  {category.text}
                </option>
              ))}
          </select>
          <select
            onChange={currentStatusHandler}
            value={currentStatus}
            className="todoSelectStatus"
          >
            <option>Choose a status</option>
            {currentCategoryObj &&
              currentCategoryObj[0]?.categoryStatus.map((status, idx) => {
                return <option key={idx}>{status}</option>;
              })}
          </select>
        </div>
        <button type="submit" className="todoButton">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
