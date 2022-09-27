import React from "react";
import "./CategoryForm.css";

const CategoryForm = ({
  categoryText,
  submitCategoryHandler,
  customCategoryHandler,
}) => {
  return (
    <div className="categoryForm">
      <form onSubmit={submitCategoryHandler}>
        <input
          className="categoryInput"
          type="text"
          placeholder="Enter a Category!"
          onChange={customCategoryHandler}
          value={categoryText}
        />

        <button type="submit" className="categoryButton">
          Add
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
