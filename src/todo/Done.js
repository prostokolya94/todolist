import React from "react";
import DoneItem from "./DoneItem";

function Done(props) {
  const styles = {
    div: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
  };
  return (
    <div style={styles}>
      {props.done.map((done, index) => {
        return <DoneItem Item done={done} key={done.id} index={index} />;
      })}
    </div>
  );
}

export default Done;
