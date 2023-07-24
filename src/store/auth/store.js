import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

export default store

// import { createSlice } from '@reduxjs/toolkit'

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { user: null, token: null },
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, accessToken } = action.payload
//       state.user = user
//       state.token = accessToken
//     },
//     logOut: (state, action) => {
//       state.user = null
//       state.token = null
//     },
//   },
// })
// export const { setCredentials, logOut } = authSlice.actions
// export default authSlice.reducer

// export const selectCurrentUser = (state) => state.auth.user

// export const selectCurrentToken = (state) => state.auth.token
