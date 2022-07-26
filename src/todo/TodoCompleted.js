import React from "react";

function TodoCompleted(props) {
  return (
    <p>
      Сделано <strong>{props.count}</strong> {props.noun()}!
    </p>
  );
}

export default TodoCompleted;
