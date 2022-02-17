import React from "react";
import Backdrop from "./Backdrop";

const Modal = ({ onCloseModal }) => {
  return (
    <Backdrop onClick={onCloseModal}>
      <div onClick={(e) => e.stopPropagation()} className="modal bg-app">
        <h1>Add Task Form</h1>
      </div>
    </Backdrop>
  );
};

export default Modal;
