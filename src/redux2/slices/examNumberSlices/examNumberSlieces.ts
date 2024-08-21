import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  answeredQuestion: number;
  correctAnswer: number;
  wrongAnswer: number;
};

const initialState: InitialState = {
  answeredQuestion: 0,
  correctAnswer: 0,
  wrongAnswer: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    answeredQuestionCount: (state) => {
      state.answeredQuestion += 1;
    },
    correctAnsweredCount: (state) => {
      state.correctAnswer += 1;
    },
    wrongAnsweredCount: (state) => {
      state.wrongAnswer += 1;
    },
  },
});

export const {
  answeredQuestionCount,
  correctAnsweredCount,
  wrongAnsweredCount,
} = counterSlice.actions;

export default counterSlice.reducer;
