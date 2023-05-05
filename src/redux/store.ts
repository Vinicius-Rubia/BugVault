import { configureStore } from "@reduxjs/toolkit";
import checklistsSlice from "./checklistsSlice";

const store = configureStore({
  reducer: {
    checklists: checklistsSlice,
  },
});

export default store;