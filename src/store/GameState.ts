import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { next, initialState } from "../usecase/GameFlow";

const GameState = createSlice({
  name: 'game',
  initialState,
  reducers: { 
    next: (state, action: PayloadAction<number>) => { 
      const { board, step } = next(state, action.payload) 
      state.board = board
      state.step = step
    }, 
    reset: (state) => {
      state.board = initialState.board
      state.step = initialState.step
    }
  }
})

export default GameState
