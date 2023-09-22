import { configureStore } from "@reduxjs/toolkit"
import { LoginSlice } from "./reducers/login";
import { RegisterSlice } from "./reducers/register";
import { ProductsSlice } from "./reducers/products";


const store = configureStore({
  reducer:{
    Login:LoginSlice.reducer,
    Register:RegisterSlice.reducer,
    Products:ProductsSlice.reducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const LoginActions = LoginSlice.actions
export const RegisterActions = RegisterSlice.actions
export const ProductsActions = ProductsSlice.actions