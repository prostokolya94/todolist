import React from "react";
import DoneItem from "./DoneItem";

function Done({ done, returnToDo, clean }) {
  return (
    <div className="doneItem">
      {done.map((done, index) => {
        return (
          <DoneItem
            done={done}
            key={done.id}
            index={index}
            returnToDo={returnToDo}
          />
        );
      })}
    </div>
  );
}

export default Done;
