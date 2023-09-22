
import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
	name: "RegisterSlice",
	initialState: {
		email: "",
		password: "",
    confirmPassword:"",
    username:"",
	},
	reducers: {
		REGISTER_EMAIL(state,{payload}:{payload:string}){
			state.email = payload
		},
		REGISTER_PASSWORD(state,{payload}:{payload:string}){
			state.password = payload
		},
    REGISTER_CONFIRM_PASSWORD(state,{payload}:{payload:string}){
      state.confirmPassword = payload
    },
    REGISTER_USERNAME(state,{payload}:{payload:string}){
      state.username = payload
    },
	},
});