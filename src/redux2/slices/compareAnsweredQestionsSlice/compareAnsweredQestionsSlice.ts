import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = { question: "" } as any;

const compareAnsweredQuestionSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCompareQuestion: (state, action) => {
      state.question = action.payload;
    },
  },
});

export const { setCompareQuestion } = compareAnsweredQuestionSlice.actions;
export default compareAnsweredQuestionSlice.reducer;
