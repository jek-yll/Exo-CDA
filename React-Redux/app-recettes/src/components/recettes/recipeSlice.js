import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "recipe",
    initialState: {
        formMode: "",
        recipes: [],
        selectedRecipe: null,
        ingredients: [],
        isLoading: false,
        error: null
    },
    reducers: {
        addRecipe: (state, action) => {
            state.recipes.push(action.payload)
        },
        deleteRecipe: (state, action) => {
            state.recipes = state.recipes.filter((r) => r.id !== action.payload)
        },
        updateRecipe: (state, action) => {
            const recipe = state.recipes.find(p => p.id === action.payload.id)
            recipe = action.payload
        }
    }
})

export const { addRecipe, deleteRecipe, updateRecipe } = authSlice.actions
export default authSlice.reducer