import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultLang: "en",
};

const selectedLanguage = createSlice({
  name: "currentLanguage",
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      state.defaultLang = action.payload;
      console.log("Language is now Ukrainian");
    },
  },
});

export const selectLanguageFromState = (state) => {
  return state.defaultLang;
};

export const { switchLanguage } = selectedLanguage.actions;
export const translationReducer = selectedLanguage.reducer;
