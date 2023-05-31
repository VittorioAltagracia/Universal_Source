import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/baseUrl";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async () => {
    const res = await fetch(baseUrl + "questions");
    if (!res.ok) {
      return Promise.reject("Unable to fetch, status: " + res.status);
    }
    const data = await res.json();
    console.log(data);
    return data;
  }
);

const initialState = {
  questionsArray: [],
  errorMes: "",
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: {
    [getQuestions.rejected]: (state, action) => {
      state.errorMes = action.error ? action.error.message : "Fetch has failed";
    },
    [getQuestions.fulfilled]: (state, action) => {
      state.questionsArray = action.payload;
    },
  },
});

export const questionsReducer = questionsSlice.reducer;

export const selectAllQuestions = (state) => {
  return state.questions.questionsArray;
};
