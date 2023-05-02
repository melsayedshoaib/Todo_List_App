import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const mainList = state.list.filter(
        (item) => item.id === action.payload.id
      );
      if (mainList < 1) {
        state.list.push(action.payload);
      }
    },
    deleteTodo: (state, action) => {
      const mainList = state.list.filter(
        (item) => item.id !== action.payload.id
      );
      return { list: mainList, listLength: mainList.length };
    },
    editTodo: (state, action) => {
      let { list } = state;
      state.list = list.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
