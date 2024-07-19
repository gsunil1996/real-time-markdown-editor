import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "./features/markdownSlice";

export const store = configureStore({
  reducer: {
    markdown: markdownReducer,
  },
  devTools: true,
});
