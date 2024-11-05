import { api } from "./api/baseApi";
import SelectedQuestionSlice from "./features/SelectedQuestionSlice";

import sideBarslice from "./features/sideBarslice";


export const rootReducer = {
    sidebar: sideBarslice,
    selectedQuestions:SelectedQuestionSlice
    
    ,

    [api.reducerPath]: api.reducer
}