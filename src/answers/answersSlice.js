import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/baseUrl";

export const getAnswers = createAsyncThunk("answers/getAnswers", async () => {
  const res = await fetch(baseUrl + "answers");
  if (!res.ok) {
    return Promise.reject("Unable to fetch, status: " + res.status);
  }
  const data = await res.json();
  console.log(data);
  return data;
});

const initialState = {
  answersArray: [],
  errorMes: "",
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {},
  extraReducers: {
    [getAnswers.rejected]: (state, action) => {
      state.errorMes = action.error ? action.error.message : "Fetch has failed";
    },
    [getAnswers.fulfilled]: (state, action) => {
      state.answersArray = action.payload;
    },
  },
});

export const answersReducer = answersSlice.reducer;

export const selectAllAnswers = (state) => {
  return state.answers.answersArray;
};
