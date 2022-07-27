import React from "react";

function ToFixBtn ({ todo, fixTodo }){
  const classes = [];
  if (todo.completed) {
  
  } else {
    classes.push("tfb");
  }
  return (
    <button className={classes.join("")} onClick={() => fixTodo(todo.id)} title ='Исправить'>
      &laquo;
    </button>
  );
}



export default ToFixBtn;