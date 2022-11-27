import React, { useContext } from "react";
import Context from "../context";
import Modal from "../modal/modal";
import BuildIcon from "@mui/icons-material/Build";
import DeleteIcon from "@mui/icons-material/Delete";
import { number } from "prop-types";

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".5rem 1rem",
        border: "none",
        borderRadius: "4px",
        marginBottom: ".5rem",
        background: "rgba(255, 0, 0, 0.1)",
    },
    input: {
        marginRight: "1rem",
    },
    buttons: {
        cursor: "pointer",
    },
};

function ToDoItem({ todo, index, onChange, key }) {
    const { removeTodo } = useContext(Context);
    const { fixTodo } = useContext(Context);
    const classes = [];
    if (todo.completed) {
        classes.push("done");
    }
    const dates = new Date(todo.id);
    const date = dates.toISOString();
    const nows = Date.now();
    const timeGone = Math.floor((nows - todo.id) / 86400000);
    let times;
    let word;

    if (timeGone > 0) {
        times = timeGone;
    }
    if (times === undefined) {
        word = "ч.";
    }
    function days() {
        let result = days % 100;
        let numbValue = result % 10;
        if ((timeGone > 4 && timeGone <= 21) || (numbValue <= 9 && numbValue > 5)) {
            return "дней";
        } else if (timeGone === 1 || numbValue === 1) {
            return "дня";
        } else if (timeGone === 0) {
            return Math.floor((nows - todo.id) / 3600000);
        } else {
            return "день";
        }
    }
    return (
        <li style={styles.li} className={classes.join("")}>
            <span>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onChange(todo.id)}
                    title="Отметить выполнение"
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
                <div className={"title"}>
                    {" ("}
                    {"добавлено "}
                    {date.substr(0, 10)}
                    {")"}
                </div>
                <div className={"title"}>
                    {"Задача активна "}
                    {times} {days()} {word}
                </div>
            </span>
            <div>
                <BuildIcon style={styles.buttons} onClick={(e) => fixTodo(todo.id)} />
                <DeleteIcon style={styles.buttons} onClick={(e) => removeTodo(todo.id)} />
            </div>

            <Modal />
        </li>
    );
}

export default ToDoItem;
