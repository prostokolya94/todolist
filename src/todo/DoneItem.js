import React from "react";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "2px solid #fff",
    borderRadius: "1px",
    background: "rgba(143, 233, 136, 1)",
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
      <button onClick={() => returnToDo(done.id)}> Вернуть на доработку</button>
    </li>
  );
}

export default DoneItem;
