
import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
	name: "RegisterSlice",
	initialState: {
		email: "",
		password: "",
    confirmPassword:"",
    username:"",
		isLoading: false,
		isSuccess: false,
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
			console.log("payload",payload)
      state.username = payload
    },
		SET_IS_LOADING(state,{payload}:{payload:boolean}){
			state.isLoading = payload
			
		},
		SET_IS_SUCCESS(state,{payload}:{payload:boolean}){
			state.isSuccess = payload
			state.email = ""
			state.password = ""
			state.confirmPassword = ""
			state.username = ""
		},
	},
});