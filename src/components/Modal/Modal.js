import React from "react";
import TodoForm from "../tasks/TodoForm";
import Backdrop from "./Backdrop";
import { FiX } from "react-icons/fi";

const Modal = ({ onCloseModal }) => {
  return (
    <Backdrop onClick={onCloseModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal rounded-lg relative bg-app"
      >
        <TodoForm onCloseModal={onCloseModal} />
        <FiX
          onClick={onCloseModal}
          className="absolute top-5 right-5 text-2xl pointer"
        />
      </div>
    </Backdrop>
  );
};

export default Modal;
