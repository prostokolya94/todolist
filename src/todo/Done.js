import React from "react";
import DoneItem from "./DoneItem";

function Done({done, returnToDo}) {

  return (
    <div className="doneItem">
      {done.map((done, index) => {
        return <DoneItem Item done={done} key={done.id} index={index} returnToDo={returnToDo} />;
      })}
    </div>
  );
}

export default Done;
