import React from "react";
import pic from "../img/005-delete.png"

function RemoveBtn({ todo, removeTodo }) {
  const classes = [];
  if (todo.completed) {
    
  } else {
    classes.push("rm");
  }
  return (
    <button className={classes.join("")} onClick={() => removeTodo(todo.id)} title='Удалить'>
      <img src={pic} alt="удалить"></img>
    </button>
  );
}

export default RemoveBtn;
