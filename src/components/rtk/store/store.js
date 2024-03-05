import { configureStore } from "@reduxjs/toolkit";
import userState from "../slices/userState";
import userQuestions from "../slices/userQuestions";

export const store = configureStore({
  reducer: {
    userState: userState,
    questions: userQuestions,
  },
});
