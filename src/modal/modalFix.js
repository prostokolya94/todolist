import React, { useEffect, useState } from "react";
import "./modal.css";
import "../index.css";
import { Button, TextField } from "@mui/material";

function ModalFix({ isFixOpen, handleFixClose, handleFixOk, todoToFix }) {
    const title = localStorage.getItem("title");
    const [value, setValue] = useState(title);

    useEffect(() => {
        setValue(title);
    }, [todoToFix]);

    const onClickYes = () => {
        handleFixOk(todoToFix.id, value);
        handleFixClose();
        setValue("");
    };
    if (!isFixOpen) {
        return null;
    }
    const closeFixModal = () => {
        handleFixClose();
    };

    return (
        <div className="modal">
            <div className="modal-body">
                <h1>Редактирование</h1>
                <TextField fullWidth value={value} onChange={(e) => setValue(e.target.value)} size="small" />
                <div className="buttons">
                    <Button onClick={onClickYes} variant={"outlined"} color={"success"}>
                        отредактировать
                    </Button>
                    <Button onClick={closeFixModal} variant={"outlined"} color={"error"}>
                        отмена
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default ModalFix;
