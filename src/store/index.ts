import { configureStore } from "@reduxjs/toolkit"
import { LoginSlice } from "./reducers/login";


const store = configureStore({
  reducer:{
    Login:LoginSlice.reducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const LoginActions = LoginSlice.actions