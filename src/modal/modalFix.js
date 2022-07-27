import React, { useState } from "react";
import "./modal.css";
import "../index.css";


function ModalFix({ isFixOpen, handleFixClose, handleFixOk, todoToFix }) {
  const [value, setValue] = useState(todoToFix?.title); 
  const onClickYes = () => {
    handleFixOk(todoToFix.id, value);
    handleFixClose();
    setValue('')
  };
  if (!isFixOpen) {
    return null;
  }
  const closeFixModal = () => {
    handleFixClose();
    setValue('')
  }

  return (
    <div className="modal">
      <div className="modal-body">
        <h1>Редактирование</h1>
        <div>
          <input value={value} onChange={(el) => setValue(el.target.value)} />
        </div>

        <button onClick={onClickYes}>отредактировать</button>
        <button onClick={closeFixModal} >отмена</button>
      </div>
    </div>
  );
}
export default ModalFix;
