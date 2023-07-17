import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../utils/firebase.config";
import { collection, getDocs } from "firebase/firestore";

// async function that fetches all the data within question collection in the db

export const getAnswers = createAsyncThunk("answers/getAnswers", async () => {
  const querySnapshot = await getDocs(collection(db, "answers"));
  const answers = [];
  querySnapshot.forEach((doc) => {
    answers.push(doc.data());
  });
  return answers;
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
