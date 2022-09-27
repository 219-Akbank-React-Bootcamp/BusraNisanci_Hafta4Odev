import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import "./Category.css";

const Category = ({ category, deleteHandler }) => {
  return (
    <li className="Category">
      <div className="categoryItem">{category.text}</div>

      <button
        onClick={(e) => deleteHandler(e, category.id)}
        className="deleteButton"
      >
        <img src="/svg/Cross.png" />
      </button>
    </li>
  );
};

export default Category;
