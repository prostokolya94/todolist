import React from "react";

function ToFixBtn ({ todo, fixTodo }){
  const classes = [];
  if (todo.completed) {
  
  } else {
    classes.push("rmo");
  }
  return (
    <button className={classes.join("")} onClick={() => fixTodo(todo.id)}>
      &laquo;
    </button>
  );
}



export default ToFixBtn;