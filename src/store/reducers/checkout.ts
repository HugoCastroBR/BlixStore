
import { createSlice } from "@reduxjs/toolkit";

export interface CheckoutProps {
  cardNumber: string,
  cardName: string,
  cardExpiration: string,
  cardCvv: string,
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  country: string,
}


export const CheckoutSlice = createSlice({
	name: "CheckoutSlice",
	initialState: {
    // credit card infos
    cardNumber: "",
    cardName: "",
    cardExpiration: "",
    cardCvv: "",
    // shipping infos
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
	} as CheckoutProps,
	reducers: {
		SET_CARD_NUMBER(state,{payload}:{payload:string}){
      state.cardNumber = payload
    },
    SET_CARD_NAME(state,{payload}:{payload:string}){
      state.cardName = payload
    },
    SET_CARD_EXPIRATION(state,{payload}:{payload:string}){
      state.cardExpiration = payload
    },
    SET_CARD_CVV(state,{payload}:{payload:string}){
      state.cardCvv = payload
    },
    SET_FIRST_NAME(state,{payload}:{payload:string}){
      state.firstName = payload
    },
    SET_LAST_NAME(state,{payload}:{payload:string}){
      state.lastName = payload
    },
    SET_ADDRESS(state,{payload}:{payload:string}){
      state.address = payload
    },
    SET_CITY(state,{payload}:{payload:string}){
      state.city = payload
    },
    SET_STATE(state,{payload}:{payload:string}){
      state.state = payload
    },
    SET_ZIP(state,{payload}:{payload:string}){
      state.zip = payload
    },
    SET_COUNTRY(state,{payload}:{payload:string}){
      state.country = payload
    },
	},
});