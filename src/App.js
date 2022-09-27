import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import CategoryForm from "./Components/CategoryForm";
import CategoryStatusForm from "./Components/CategoryStatusForm";
import Category from "./Components/Category";
import React from "react";
import { useState } from "react";
import CategoryList from "./Components/CategoryList/CategoryList";

function App() {
  const [inputText, setInputText] = useState("");
  const [categoryText, setCategoryText] = useState("");
  const [statusText, setStatusText] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentStatus, setCurrentStatus] = useState(null);
  const [todos, setTodos] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [statusList, setStatusList] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const inputTextHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };
console.log(todos)
  const customCategoryHandler = (e) => {
    e.preventDefault();
    setCategoryText(e.target.value);
  };


  const customStatusHandler = (e) => {
    e.preventDefault();
    setStatusText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (currentCategory && currentStatus) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random().toString(36).substring(2, 7),
          categoryId: currentCategory,
          status: currentStatus
        },
      ]);
      setInputText("");
    } else {
      alert("Lutfen bir kategori ve statu secin");
    }
  };

  const submitCategoryHandler = (e) => {
    e.preventDefault();
    setCategoryList([
      ...categoryList,
      {
        text: categoryText,
        id: Math.random().toString(36).substring(2, 7),
        categoryStatus: [],
      },
    ]);
    setCategoryText("");
  };

  const submitCategoryStatusHandler = (e) => {
    e.preventDefault();
    const currentCategoryObj = categoryList.filter(
      (category) => category.id === currentCategory
    );
    const otherCategories = categoryList.filter(
      (category) => category.id !== currentCategory
    );
    setCategoryList([
      ...otherCategories,
      {
        ...currentCategoryObj[0],
        categoryStatus: [...currentCategoryObj[0].categoryStatus, statusText],
      },
    ]);
    setStatusText("");
  };
  const currentCategoryHandler = (e) => {
    setCurrentCategory(e.target.value);
  };

  const currentStatusHandler = (e) => {
    setCurrentStatus(e.target.value);
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };
  const completeHandler = (e, id) => {
    e.preventDefault();
    const newTodos = todos.reduce((prev, current) => {
      if (current.id === id) {
        return [...prev, {...current, completed: !current.completed}]
      } else {
        return [...prev, current]
      }
    },[])
    setTodos([...newTodos])
  };
  const filterHandler = (e) => {
    e.preventDefault()
    if (e.target.value !== 'all') {
      const filtered = todos.reduce((prev, current) => {
        if (current.categoryId === e.target.value) {
          return [...prev, {...current}]
        } else {
          return [...prev]
        }
      },[])
      setFilteredTodos([...filtered])
    } else {
      setFilteredTodos([])
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoForm
        inputText={inputText}
        setInput={setInputText}
        categoryList={categoryList}
        currentCategory={currentCategory}
        currentCategoryHandler={currentCategoryHandler}
        currentStatus={currentStatus}
        setCategoryList={setCategoryList}
        statusList={statusList}
        currentStatusHandler={currentStatusHandler}
        setStatusList={setStatusList}
        submitTodoHandler={submitTodoHandler}
        inputTextHandler={inputTextHandler}
        completeHandler={completeHandler}
        filterHandler={filterHandler}
      />

      <TodoList
        todos={todos}
        deleteHandler={deleteHandler}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
        completeHandler={completeHandler}
        categoryList={categoryList}
        filterHandler={filterHandler}
      />
      <CategoryForm
        categoryText={categoryText}
        submitCategoryHandler={submitCategoryHandler}
        customCategoryHandler={customCategoryHandler}
      />
      <CategoryStatusForm
        currentCategory={currentCategory}
        customStatusHandler={customStatusHandler}
        statusText={statusText}
        submitCategoryStatusHandler={submitCategoryStatusHandler}
      />
      <CategoryList
        categoryList={categoryList}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default App;
