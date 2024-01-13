import { configureStore } from "@reduxjs/toolkit";
import { questionsReducer } from "../questions/questionsSlice";
import { translationReducer } from "../utils/translations/translationSlice";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    currentLanguage: translationReducer,
  },
});
