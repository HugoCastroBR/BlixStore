
import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
	name: "LoginSlice",
	initialState: {
		email: "",
		password: "",
	},
	reducers: {
		SET_EMAIL(state,{payload}:{payload:string}){
			state.email = payload
		},
		SET_PASSWORD(state,{payload}:{payload:string}){
			state.password = payload
		}
	},
});