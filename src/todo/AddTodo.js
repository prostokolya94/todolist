import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

const style = {
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
    },
};

function AddTodo({ onCreate }) {
    const [currentTitle, setCurrentTitle] = useState("");
    console.log(currentTitle);

    return (
        <div style={style.container}>
            <TextField
                onChange={(e) => setCurrentTitle(e.target.value)}
                size={"small"}
                value={currentTitle}
            />
            <Button onClick={(e) => onCreate(currentTitle)} variant={"outlined"}>
                Запланировать
            </Button>
        </div>
    );
}

export default AddTodo;
