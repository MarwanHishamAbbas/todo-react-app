import React from "react";

const TodoItem = ({ title }) => {
  return (
    <div className="flex items-center px-10 py-5 border-border border-b">
      <input type="checkbox" name="checkbox" id="checkbox" />
      <h1 className="ml-3">{title}</h1>
    </div>
  );
};

export default TodoItem;
