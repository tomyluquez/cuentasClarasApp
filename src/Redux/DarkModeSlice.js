import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  darkMode: false,
};

export const darkModeReducer = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeTheme: (state) =>
      produce(state, (draft) => {
        draft.darkMode = !draft.darkMode;
      }),
  },
});

export const { changeTheme } = darkModeReducer.actions;
export default darkModeReducer.reducer;
