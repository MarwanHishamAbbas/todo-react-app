import React from "react";

import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  return (
    <main className="w-full">
      {todos.map((item) => (
        <TodoItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          important={item.important}
          completed={item.completed}
        />
      ))}
    </main>
  );
};

export default TodoList;
