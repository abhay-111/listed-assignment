import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 1,
  showMobileNav:false
};
export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    add: (state,action)=>{
        console.log(action)
       state.count = action.payload;
    },
    toggleMobileNav: (state,action) =>{
        state.showMobileNav = !state.showMobileNav
    }
  },
});

export const { add,toggleMobileNav } = mainSlice.actions
