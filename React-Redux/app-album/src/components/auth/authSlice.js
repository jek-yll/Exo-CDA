import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {SIGN_IN, SIGN_UP} from "../../firebaseConfig.js"
import axios from "axios"

export const signUpUser = createAsyncThunk(
    "auth/signUpUser",
    async (identifiants) => {

        const credentials = {...identifiants, returnSecureToken: true}
        try {
            const response = await axios.post(SIGN_UP, credentials)
        
            if (response.status !== 200) {
                throw new Error("Something went wrong")
            }

            const data = await response.data
            localStorage.setItem("token", data.idToken)
            return data
        } catch(error) {
            console.error(error)
        }
    }
)

export const signInUser = createAsyncThunk(
    "auth/signInUser",
    async (identifiants) => {
        
        const credentials = {...identifiants, returnSecureToken: true}

        try {
            const response = await axios.post(SIGN_IN, credentials)
            if (response.status !== 200) {
                throw new Error("Something went wrong")
            }

            const data = await response.data
            localStorage.setItem("token", data.idToken)
            return data
        } catch {
            console.error(error)
        }
    })

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        authMode: ""
    },
    reducers: {
        setAuthMode: (state, action) => {
            state.authMode = action.payload
        },
        signOutUser: (state) => {
            state.user = null
            localStorage.removeItem("token")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

export const {setAuthMode, signOutUser} = authSlice.actions
export default authSlice.reducer