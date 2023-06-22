import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 1,
};
export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    add: function(state,action) {
        console.log(action)
       state.count = action.payload;
    },
  },
});

export const { add } = mainSlice.actions
