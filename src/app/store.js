import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { questionsReducer } from "../questions/questionsSlice";
import { translationReducer } from "../utils/translations/translationSlice";
export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    currentLanguage: translationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
