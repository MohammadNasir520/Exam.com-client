// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface QuizState {
//   selectedOptions: { QId: number; OpId: number }[];
// }

// const initialState: QuizState = {
//   selectedOptions: [],
// };

// const selectedQuestions = createSlice({
//   name: "selectedQuestions",
//   initialState,
//   reducers: {
//     setSelectQuestions: (
//       state,
//       action: PayloadAction<{ QId: number; OpId: number }>
//     ) => {
//       console.log("Updating selectedOptions with:", action.payload);
//       const { QId, OpId } = action.payload;
// console.log(state.selectedOptions)
//       // Remove previous option for the same question
//       const existingOptions = state.selectedOptions.filter(option => option.QId !== QId);
      
//       // Update the selectedOptions array
//       state.selectedOptions = [...  state.selectedOptions, { QId, OpId }];
//     },
//   },
// });

// export const { setSelectQuestions } = selectedQuestions.actions;
// export default selectedQuestions.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuizState {
  selectedOptions: { QId: number; OpId: number }[];
}

const initialState: QuizState = {
  selectedOptions: [],
};

const selectedQuestions = createSlice({
  name: "selectedQuestions",
  initialState,
  reducers: {
    setSelectQuestions: (
      state,
      action: PayloadAction<{ QId: number; OpId: number }>
    ) => {
      console.log("Updating selectedOptions with:", action.payload);
      const { QId, OpId } = action.payload;
      // Add the new selection to the selectedOptions
      state.selectedOptions.push({ QId, OpId });
      console.log("Current selectedOptions:", state.selectedOptions);
    },
  },
});

export const { setSelectQuestions } = selectedQuestions.actions;
export default selectedQuestions.reducer;
