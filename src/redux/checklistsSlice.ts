import { createSlice } from "@reduxjs/toolkit";

interface ChecklistItem {
  id: string;
  company: string;
  name: string;
  duration: string;
  urlPost: string;
  slug: string;
  result: boolean;
  createdAt: string;
}

export const slice = createSlice({
  name: "checklists",
  initialState: {
    checklists: [],
    recentchecklists: []
  },
  reducers: {
    setChecklists: (state, { payload }) => {
      return { ...state, checklists: payload };
    },
    setRecentChecklists: (state, { payload }) => {
      return { ...state, recentchecklists: payload };
    },
  },
});

export const { setChecklists, setRecentChecklists } = slice.actions;

export const selectChecklists = (state: any) => state.checklists;

export default slice.reducer;