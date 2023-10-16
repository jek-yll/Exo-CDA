import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./components/Products.Slice";


export default configureStore({
    reducer: {
        product: ProductsSlice
    }
})