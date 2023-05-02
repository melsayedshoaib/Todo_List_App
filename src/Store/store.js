import todoSlice from "./Slices/todoSlice";

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: {
    todoSlice,
  },
});
