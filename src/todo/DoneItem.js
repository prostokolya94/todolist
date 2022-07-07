import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";
import Modal from "../modal/modal";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

function DoneItem({ done, index }) {
  return (
    <li style={styles.li}>
      <span>
        <strong>{index + 1}</strong>
        &nbsp;
        {done.title}
      </span>
    </li>
  );
}

export default DoneItem;
