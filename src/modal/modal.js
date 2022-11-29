import React from "react";
import "./modal.css";
import "../index.css";
import { Button } from "@mui/material";

function Modal({ isOpen, handleOk, handleClose }) {
    const onClickYes = () => {
        handleOk();
        handleClose();
    };

    if (!isOpen) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-body">
                <h2>Подтверждение</h2>
                <p>Удалить задачу?</p>
                <div className="buttons">
                    <Button onClick={onClickYes} variant={"outlined"} color={"success"}>
                        да
                    </Button>
                    <Button onClick={handleClose} variant={"outlined"} color={"error"}>
                        нет
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default Modal;
