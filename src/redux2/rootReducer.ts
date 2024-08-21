import counterSlice from "@/redux/slices/examNumberSlices/examNumberSlieces";
import compareAnsweredQuestionSlice from "@/redux/slices/compareAnsweredQestionsSlice/compareAnsweredQestionsSlice";

export const rootReducer = {
  examNumberCalculation: counterSlice,
  compareAnsweredQuestion: compareAnsweredQuestionSlice,
};
