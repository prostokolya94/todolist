import React from "react";

function TodoCount(props) {
    return (
        <p>
            Сделано <strong>{props.count}</strong> {props.noun()}!
        </p>
    );
}

export default TodoCount;
