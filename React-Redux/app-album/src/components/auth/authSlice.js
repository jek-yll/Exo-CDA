import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {SIGN_IN, SIGN_UP} from "../../firebaseConfig.js"
import axios from "axios"

export const signUpUser = createAsyncThunk(
    "auth/signUpUser",
    async (email, password) => {
        const credentials = {
            email: email,
            password: password,
            returnSecureToken: true
        }


        try {
            const response = await axios.post(SIGN_UP, credentials)
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            const data = await response.json()
            localStorage.setItem("token", data.idToken)
        } catch {
            console.error(error.message)
        }
    }
)

export const signInUser = createAsyncThunk(
    "auth/signInUser",
    async (email, password) => {
        
        const credentials = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        try {
            const response = await axios.post(SIGN_IN, credentials)
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            const data = await response.json()
            localStorage.setItem("token", data.idToken)
        } catch {
            console.error(error.message)
        }
    })
    
export const signUpFetch = createAsyncThunk(
    "auth/signUpFetch",
    async (email, password) => {

        const credentials = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        try {
            const response = await fetch(SIGN_UP,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            if (!response.ok) {
                throw new Error("Something went wrong during the POST")
            }
            const data = await response.json()
            localStorage.setItem("token", data.idToken)
        } catch(error) {
            console.error(error.message)
        }
    }
)

export const signInFetch = createAsyncThunk(
    "auth/signInFetch",
    async (email, password) => {

        const credentials = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        try {
            const response = await fetch(SIGN_IN,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            if (!response.ok) {
                throw new Error("Something went wrong during the POST")
            }
            const data = await response.json()
            localStorage.setItem("token", data.idToken)
        } catch(error) {
            console.error(error.message)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        authMode: "Sign Up"
    },
    reducers: {
        setAuthMode: (state, action) => {
            state.authMode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(signInFetch.fulfilled, (state, action) => {
            state.user = action.payload
        })  
        builder.addCase(signUpFetch.fulfilled, (state, action) => {
            state.user = action.payload
        })          
    }

})

export const {setAuthMode} = authSlice.actions
export default authSlice.reducer