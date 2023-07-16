import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async () => {
    const querySnapshot = await getDocs(collection(db, "questions"));
    const questions = [];
    querySnapshot.forEach((doc) => {
      questions.push(doc.data());
    });
    return questions;
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
