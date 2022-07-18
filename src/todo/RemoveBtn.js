import React from "react";

function RemoveBtn({ todo, removeTodo }) {
  const classes = [];
  if (todo.completed) {
    classes.push("done-btn");
  } else {
    classes.push("rm");
  }
  return (
    <button className={classes.join("")} onClick={() => removeTodo(todo.id)}>
      &times;
    </button>
  );
}

export default RemoveBtn;
