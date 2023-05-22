import { createSlice } from '@reduxjs/toolkit'
const initialState = { value: 0 }
const CreatSlice = createSlice({
  username: "Nazar Ali",
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})