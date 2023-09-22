
import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../../components/molecules/product";




export const ProductsSlice = createSlice({
	name: "ProductsSlice",
	initialState: {
		products: [] as ProductProps[],
  },
	reducers: {
    SET_PRODUCTS(state,{payload}:{payload:ProductProps[]}){
      state.products = payload
    },
	},
});