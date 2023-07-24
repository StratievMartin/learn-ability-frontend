import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

const userReducer = createReducer(initialState, {
  SET_USER: (state, action) => {
    state.user = action.payload
  },
  CLEAR_USER: (state) => {
    state.user = null
  },
})

export default userReducer
