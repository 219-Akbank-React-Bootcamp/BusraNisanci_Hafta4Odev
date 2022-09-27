import React from "react";
import "./CategoryStatusForm.css";

const CategoryStatusForm = ({ currentCategory, customStatusHandler, statusText, submitCategoryStatusHandler }) => {
  return (
    <div className="categoryListContainer">
      {currentCategory.length > 0 && 
      <form onSubmit={submitCategoryStatusHandler}>
        <input
          className="categoryInput"
          type="text"
          placeholder="Enter a Status!"
          onChange={customStatusHandler}
          value={statusText}
        />

        <button type="submit" className="statusButton">
          Add
        </button>
      </form>}
    </div>
  );
};

export default CategoryStatusForm;
