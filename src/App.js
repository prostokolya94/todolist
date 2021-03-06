import React, { useState, useEffect } from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";
import TodoCompleted from "./todo/TodoCompleted";
import Modal from "./modal/modal";
import Done from "./todo/Done";
import ModalFix from "./modal/modalFix";

function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToRemove, setidToRemove] = useState();
  const [idToFix, setIdToFix] = useState();
  const [isFixModalOpen, setIsFixModalOpen] = useState(false);
  const count = todos.filter((el) => el.completed).length;
  const done = todos.filter((el) => el.completed);
  function noun() {
    let result = noun % 100;
    let numbValue = result % 10;

    if ((count > 4 && count <= 21) || (numbValue <= 9 && numbValue > 5)) {
      return "дел";
    } else if (count === 1 || numbValue === 1) {
      return "дело";
    } else if (count === 0) {
      return "дел";
    } else {
      return "дела";
    }
  }

  function toggleTodo(id) {
    let todoArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(todoArray);

    localStorage.setItem("todoArr", JSON.stringify(todoArray));
  }

  function removeTodo(id) {
    setIsModalOpen(true);
    setidToRemove(id);
  }
  function fixTodo(id) {
    setIsFixModalOpen(true);
    setIdToFix(id);
  }
  function handleOkClick() {
    setTodos(todos.filter((todo) => todo.id !== idToRemove));
    setidToRemove(null);
    let filterArr = todos.filter((todo) => todo.id !== idToRemove);
    localStorage.setItem("todoArr", JSON.stringify(filterArr));
  }
  function updateTitleById(id, title) {
    let todoArray = todos.map((todo) => {
      if (todo.id === id) {
        if (title.length > 0) {
          todo.title = title;
        } else {
        }
      }
      return todo;
    });
    setTodos(todoArray);
    localStorage.setItem("todoArr", JSON.stringify(todoArray));
  }
  function addTodo(title) {
    let todoArr = todos.concat([
      {
        title,
        id: Date.now(),
        completed: false,
      },
    ]);
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
    setTodos(todoArr);
  }

  useEffect(() => {
    const item = localStorage.getItem("todoArr");
    let localItem = JSON.parse(item);
    if (localItem) {
      setTodos(localItem);
    } else {
      setTodos([]);
    }
    ///setTodos(localItem ?? [])
  }, []);

  return (
    <Context.Provider value={{ removeTodo, fixTodo }}>
      <div className="wrapper">
        <Modal
          isOpen={isModalOpen}
          handleOk={handleOkClick}
          handleClose={() => setIsModalOpen(false)}
        />
        <ModalFix
          isFixOpen={isFixModalOpen}
          handleFixClose={() => setIsFixModalOpen(false)}
          handleFixOk={updateTitleById}
          todoToFix={todos.find((el) => el.id === idToFix)}
        />
        <h1 className="header"> Список дел</h1>

        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList
            todos={todos.filter((el) => !el.completed)}
            onToggle={toggleTodo}
          />
        ) : (
          <p>Нет дел</p>
        )}
        <TodoCompleted count={count} noun={noun} />
        <Done done={done} returnToDo={toggleTodo} />
      </div>
    </Context.Provider>
  );
}
export default App;
