import React from "react";

function TodoCompleted(props) {
  return (
    <p>
      Today is <strong>{props.count}</strong> todo completed!
    </p>
  );
}

export default TodoCompleted;
