import React from "react";

function RemoveBtn({ todo, removeTodo }) {
  const classes = [];
  if (todo.completed) {
    
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
