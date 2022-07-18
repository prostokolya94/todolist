import React from "react";
import DoneItem from "./DoneItem";

function Done(props) {

  return (
    <div className="doneItem">
      {props.done.map((done, index) => {
        return <DoneItem Item done={done} key={done.id} index={index} />;
      })}
    </div>
  );
}

export default Done;
