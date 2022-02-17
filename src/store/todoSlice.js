import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo() {},
    removeTodo() {},
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
