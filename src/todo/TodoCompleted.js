import React, { useState } from "react";

function TodoCompleted(defaultCount = 0) {
  const [count, upCount] = useState(defaultCount);
  return (
    <p>
      Today is <strong>...</strong> todo completed!
    </p>
  );
}

export default TodoCompleted;
