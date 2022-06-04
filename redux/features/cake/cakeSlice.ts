import { createSlice } from "@reduxjs/toolkit";

export interface cakeState {
  numOfCakes: number;
}

const initialState: cakeState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes -= 1;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.playLoad;
    },
  },
});

export const { ordered, restocked } = cakeSlice.actions;

export default cakeSlice.reducer;
