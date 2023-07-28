import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { questionsReducer } from "../questions/questionsSlice";
import { ukrainianReducer } from "../questions/questionsSlice";
export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    ukrainianData: ukrainianReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
