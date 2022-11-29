import React from "react";
import { Button } from "@mui/material";

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

function CompletedTodoItem({ done, returnToDo }) {
    return (
        <li style={styles.li}>
            <span>
                &nbsp;
                {done.title}
            </span>
            <Button onClick={() => returnToDo(done.id)} size={"small"}>
                {" "}
                Переделать
            </Button>
        </li>
    );
}

export default CompletedTodoItem;
