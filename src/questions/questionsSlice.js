import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/baseUrl";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async () => {
    const res = await fetch(baseUrl + "question");
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
  isLoading: true,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: {
    [getQuestions.pending]: (state) => {
      state.isLoading = true;
    },
    [getQuestions.rejected]: (state, action) => {
      state.errorMes = action.error ? action.error.message : "Fetch has failed";
      state.isLoading = false;
    },
    [getQuestions.fulfilled]: (state, action) => {
      state.questionsArray = action.payload;
      state.isLoading = false;
      state.errorMes = "";
    },
  },
});

export const questionsReducer = questionsSlice.reducer;

export const selectAllQuestions = (state) => {
  return state.questions.questionsArray;
};
