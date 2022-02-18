import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <main className="w-full">
      {todos.map((item) => (
        <TodoItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </main>
  );
};

export default TodoList;
