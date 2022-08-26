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
    border: "none",
    borderRadius: "4px",
    marginBottom: ".5rem",
    background: "rgba(255, 0, 0, 0.1)",
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
  const nows = new Date(todo.id);
  const now = nows.toISOString();
  return (
    <li style={styles.li} className={classes.join("")}>
      <span>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
          title="Отметить выполнение"
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
        <div className={"title"}>
          {" ("}
          {"добавлено "}
          {now.substr(0, 10)}
          {")"}
        </div>
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
