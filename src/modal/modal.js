import React from "react";
import "./modal.css";
import "../index.css";

/*export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <button className="rmo" onClick={() => this.setState({ isOpen: true })}>
          х
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Confirm delete</h1>
              <p>Do you realy want delete this todo?</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                yes
              </button>
              <button onClick={() => this.setState({ isOpen: false })}>
                no
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}*/

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
        <h1>Confirm delete</h1>
        <p>Do you realy want delete this todo?</p>
        <button onClick={onClickYes}>yes</button>
        <button onClick={handleClose}>no</button>
      </div>
    </div>
  );
}
export default Modal;
