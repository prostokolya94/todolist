import React from "react";
import CompletedTodoItem from "./CopletedTodoItem";

function CompletedTodo({ done, returnToDo }) {
    return (
        <div className="doneItem">
            {done.map((done, index) => {
                return <CompletedTodoItem done={done} key={done.id} index={index} returnToDo={returnToDo} />;
            })}
        </div>
    );
}

export default CompletedTodo;
