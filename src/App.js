import React, { useState, useEffect } from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";
import TodoCompleted from "./todo/TodoCompleted";
import Modal from "./modal/modal";
import Done from "./todo/Done";

function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToRemove, setidToRemove] = useState();

  const count = todos.filter((el) => el.completed).length;
  const done = todos.filter((el) => el.completed);
  function toggleTodo(id) {
    let todoArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(todoArray);
    /*setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );*/
    localStorage.setItem("todoArr", JSON.stringify(todoArray));
   
  }

  function removeTodo(id) {
    setIsModalOpen(true);
    setidToRemove(id);
  }
  function handleOkClick() {
    setTodos(todos.filter((todo) => todo.id !== idToRemove));
    setidToRemove(null);
    //localStorage.removeItem(('todoArr[]'))
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
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <Modal
          isOpen={isModalOpen}
          handleOk={handleOkClick}
          handleClose={() => setIsModalOpen(false)}
        />
        <h1 className="header"> React tutorial</h1>

        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList
            todos={todos.filter((el) => !el.completed)}
            onToggle={toggleTodo}
          />
        ) : (
          <p>No todos</p>
        )}
        <TodoCompleted count={count} />
        <Done done={done} returnToDo={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
