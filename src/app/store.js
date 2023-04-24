import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { answersReducer } from "../answers/answersSlice";

export const store = configureStore({
  reducer: {
    answers: answersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
