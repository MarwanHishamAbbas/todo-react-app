import React from "react";
import TodoForm from "../tasks/TodoForm";
import Backdrop from "./Backdrop";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
const Modal = ({ onCloseModal }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={onCloseModal}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="modal rounded-lg relative bg-app"
      >
        <TodoForm onCloseModal={onCloseModal} />
        <FiX
          onClick={onCloseModal}
          className="absolute top-5 right-5 text-2xl pointer"
        />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
