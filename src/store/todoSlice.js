import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.todos.push({
        id: newTodo.id,
        title: newTodo.title,
        description: newTodo.description,
        important: false,
        completed: false,
      });
    },
    removeTodo(state, action) {
      const todoId = action.payload;
      state.todos = state.todos.filter((item) => item.id !== todoId);
    },
    toggleImportant(state, action) {
      const todoId = action.payload.id;
      const importantTodo = state.todos.find((item) => item.id === todoId);
      importantTodo.important = !action.payload.isImportant;
    },
    toggleCompleted(state, action) {
      const todoId = action.payload.id;
      const completedTodo = state.todos.find((item) => item.id === todoId);
      completedTodo.completed = !action.payload.isCompleted;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
