import React, { useState } from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";
import TodoCompleted from "./todo/TodoCompleted";
import Modal from "./modal/modal";
import Done from "./todo/Done";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, complited: false, title: "Buy some bread" },
    { id: 2, complited: false, title: "Buy some spread" },
    { id: 3, complited: false, title: "Buy some milk" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToRemove, setidToRemove] = useState();

  const count = todos.filter((el) => el.complited).length;
  const done = todos.filter((el) => el.complited)
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setIsModalOpen(true);
    setidToRemove(id)
  }
  function handleOkClick() {
    setTodos(todos.filter((todo) => todo.id !== idToRemove))
    setidToRemove(null)  
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <Modal
          isOpen={isModalOpen}
          handleOk={handleOkClick}
          handleClose={()=>setIsModalOpen(false)}
        />
        <h1> React tutorial</h1>

        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos</p>
        )}
        <TodoCompleted count={count} />
        <Done done={done} />
      </div>
    </Context.Provider>
  );
}

export default App;
