import { createSlice } from "@reduxjs/toolkit";

export const userQuestions = createSlice({
  initialState: [],
  name: "inputSlice",
  reducers: {
    sendQuestion: (state, action) => {
      state.push(action.payload);
    },
    searchQuestion: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      // Filter the state array to find elements that include the search term
      const filteredMessages = state.filter((message) =>
        message.toLowerCase().includes(searchTerm)
      );
      if (filteredMessages.length > 0) {
        filteredMessages.map((msg) => alert(`The matching word is "${msg}"`));
      } else {
        alert("No matching word");
      }
    },
    resetChat: () => [],
  },
});

export const { sendQuestion, searchQuestion, resetChat } = userQuestions.actions;
export default userQuestions.reducer;
