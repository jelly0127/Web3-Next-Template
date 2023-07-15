import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  dark: boolean
}

const initialState: CounterState = {
  value: 0,
  dark: true,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    updateTheme: (state) => {
      state.dark = !state.dark
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateTheme } = counterSlice.actions

export default counterSlice.reducer
