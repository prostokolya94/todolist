import React from "react";
import pic from "../img/003-repairing-1.png"


function ToFixBtn ({ todo, fixTodo }){
  const classes = [];
  if (todo.completed) {
  
  } else {
    classes.push("tfb");
  }
  return (
    <button className={classes.join("")} onClick={() => fixTodo(todo.id)} title ='Исправить'>
      <img src={pic} alt="sdf"></img>
    </button>
  );
}



export default ToFixBtn;