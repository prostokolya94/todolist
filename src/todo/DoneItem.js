import React from "react";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "2px solid #fff",
    borderRadius: "4px",
    background: "rgba(0, 0, 255, 0.1)",
  },
  input: {
    marginRight: "1rem",
  },
};

function DoneItem({ done, returnToDo }) {
  return (
    <li style={styles.li}>
      <span>
        &nbsp;
        {done.title}
      </span>
      <button onClick={() => returnToDo(done.id)}> Переделать</button>
    </li>
  );
}

export default DoneItem;
