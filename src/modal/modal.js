import React from "react";
import "./modal.css";
import "../index.css";

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
        <h1>Подтверждение</h1>
        <p>Удалить задачу?</p>
        <button onClick={onClickYes}>да</button>
        <button onClick={handleClose}>нет</button>
      </div>
    </div>
  );
}
export default Modal;
