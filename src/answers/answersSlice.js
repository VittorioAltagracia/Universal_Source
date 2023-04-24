import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl } from "../utils/baseUrl";
import { fetchAnswers } from "./fetchAnswers";

export const getAnswers = createAsyncThunk("answers/getAnswers", async () => {
  const res = await fetch(baseUrl, {
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlcXRsYW5jcHNnaWR2eWdvaGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDc1MzgsImV4cCI6MTk5NzUyMzUzOH0.v5OWspbLsQk6SU3ptfRlgP3DH9ofCORGfxO-2dBL8lk",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlcXRsYW5jcHNnaWR2eWdvaGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDc1MzgsImV4cCI6MTk5NzUyMzUzOH0.v5OWspbLsQk6SU3ptfRlgP3DH9ofCORGfxO-2dBL8lk",
    },
  });
  if (!res.ok) {
    return Promise.reject("Unable to fetch, status: " + res.status);
  }

  const data = await res.json();
  console.log(data);
  return data;
});

const initialState = {
  answersArray: [],
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {},
  extraReducers: {
    [getAnswers.fulfilled]: (state, action) => {
      state.answersArray = action.payload;
    },
  },
});

export const answersReducer = answersSlice.reducer;

export const selectAllAnswers = (state) => {
  return state.answers.answersArray;
};
