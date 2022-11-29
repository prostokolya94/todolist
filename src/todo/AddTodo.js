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

function AddTodo({ onCreate, error, setError }) {
    const [currentTitle, setCurrentTitle] = useState("");

    function changeTitle(event) {
        setCurrentTitle(event.target.value);
        setError(false);
    }

    function handleSendClick() {
        onCreate(currentTitle);
        setCurrentTitle("");
    }
    return (
        <div style={style.container}>
            <TextField
                onChange={(e) => changeTitle(e)}
                size={"small"}
                variant={"outlined"}
                value={currentTitle}
                placeholder={error ? "Вы ничего не написали!" : "Напишите что-нибудь"}
                color={error ? "error" : "primary"}
            />
            <Button onClick={handleSendClick} variant={"outlined"}>
                Запланировать
            </Button>
        </div>
    );
}

export default AddTodo;
