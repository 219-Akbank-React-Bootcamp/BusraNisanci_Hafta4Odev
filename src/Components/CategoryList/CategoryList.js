import React from "react";
import Category from "../Category";
import "./CategoryList.css";

const CategoryList = ({ categoryList, deleteHandler }) => {
  console.log(categoryList)
  return (
    <div className="categoryListContainer">
      <ul>
        {categoryList.length > 0 &&
          categoryList.map((category) => (
            <Category
            category={category}
              deleteHandler={deleteHandler}
            />
          ))}
      </ul>
    </div>
  );
};

export default CategoryList;
