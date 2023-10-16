import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [

        ],
        counterProduct: 0
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: Date.now(),
                title: action.payload.title,
                price: action.payload.price
            }

            state.products.push(newProduct)
            state.counterProduct += 1
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(p => p.id !== action.payload)
        },
        updateProduct: (state, action) => {
            const product = state.products.find(p => p.id === action.payload.id)
            product.title = action.payload.title
            product.price = action.payload.price;
        }
    }
})

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions
export default productSlice.reducer