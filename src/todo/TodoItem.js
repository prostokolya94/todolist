import React, { useContext } from "react";
import Context from "../context";
import Modal from "../modal/modal";
import RemoveBtn from "./RemoveBtn";
import ToFixBtn from "./ToFixBtn";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

function ToDoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const { fixTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li} className={classes.join("")}>
      <span>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <ToFixBtn
        isFixOpen={todo.completed}
        todo={todo}
        key={todo}
        index={index}
        fixTodo={fixTodo}
      />
      <RemoveBtn
        isOpen={todo.completed}
        todo={todo}
        key={todo.id}
        index={index}
        removeTodo={removeTodo}
      />
      <Modal />
    </li>
  );
}

export default ToDoItem;
