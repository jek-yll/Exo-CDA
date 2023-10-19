import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import albumSlice from "./components/album/AlbumSlice";


export default configureStore({
    reducer: {
        auth: authSlice,
        album: albumSlice
    }
})