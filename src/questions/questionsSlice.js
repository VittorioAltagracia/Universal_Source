import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../utils/firebase.config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import data from "../../src/utils/db.json";

// async function that fetches all the data within question collection in the db

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

// helper function used to quickly populate firestore db iterating over data in db.json file

export const addData = async () => {
  const dataArray = data.data;
  for (const entry of dataArray) {
    const docRef = await addDoc(collection(db, "questions"), {
      id: entry.id,
      name: entry.name,
      answer: entry.answer,
      category: entry.category,
      source: entry.source,
    });
    console.log(
      "Collection updated with the following document ID: ",
      docRef.id
    );
  }
};

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
      // addData(); function is called after promise has been resolved
    },
  },
});

export const questionsReducer = questionsSlice.reducer;

export const selectAllQuestions = (state) => {
  return state.questions.questionsArray;
};
