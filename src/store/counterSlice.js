import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "todo",
  initialState: {
    list: [
      {
        name: "Title",
        time: "Description",
        id: Math.floor(Math.random() * 10000),
      },
    ],
  },
  reducers: {
    increment: (state, action) => {
      let newTodo = {
        name: action.payload.name,
        time: action.payload.time,
        id: Math.floor(Math.random() * 10000),
      };
      state.list = [...state.list, newTodo];
    },
    decrement: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;