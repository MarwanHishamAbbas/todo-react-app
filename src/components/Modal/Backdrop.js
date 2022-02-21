import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ onClick, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="absolute z-10 top-0 left-0 h-full w-full bg-backdrop flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
