import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_DB_URL } from './../../firebaseConfig';
import axios from "axios";

export const getAllAlbums = createAsyncThunk(
    "album/getAllAlbums",
    async () => {
        try {
            const response = await axios.get(`${BASE_DB_URL}/album.json`)

            if (response.status !== 200) {
                throw new Error ("Something went wrong during the GET request")
            }

            const data = await response.data
            const tmpAlbums = []
            //console.log(response);
            for (const key in data){
                tmpAlbums.push({id: key, ...data[key]})
            }

            return data

        } catch(error) {
            console.error(error);
        }
    }
)

export const addAlbum = createAsyncThunk(
    "album/adAlbum",
    async ({token, album}) => {
        try {
        const response = await axios.post(`${BASE_DB_URL}/album.json?auth=${token}`, album)

        console.log(response.data);
        const data = await response.data
        return data

        } catch (error) {
            console.error(error);
        }
    }
)

export const editAlbum = createAsyncThunk(
    "album/editAlbum",
    async ({token, id, album}) => {
        try {
            const response = await axios.patch(`${BASE_DB_URL}/album/${id}.json?auth=${token}`, album)

            if (response.status != 200) {
                throw new Error ("Erreur lors de la modification de l'album")
            }

            return {album: album, id: id }

        } catch (error) {
            console.error(error);
        }
    }
)

export const deleteAlbum = createAsyncThunk(
    "album/deleteAlbum",
    async ({token, id}) => {
        try {
            const response = await axios.delete(`${BASE_DB_URL}/album/${id}.json?auth=${token}`)
            console.log(response);
            if (response.status !== 200) {
                throw new Error("Something went wrong during the DELETE recipe request") 
            }
            const data = await response.data
            return data.id
        } catch (error) {
            console.error(error);
        }
    }
)

const albumSlice = createSlice({
    name: "album",
    initialState: {
        albums: [],
        selectedAlbum: null,
        formMode: null
    },
    reducers: {
        setSelectedAlbum: (state,action) => {
            state.selectedAlbum = action.payload
        },
        setFormMode: (state, action) => {
            state.formMode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllAlbums.fulfilled, (state, action) => {
            state.albums = action.payload
        })
        builder.addCase(addAlbum.fulfilled, (state, action) => {
            state.albums.push(action.payload)
        })
        builder.addCase(editAlbum.fulfilled, (state, action) => {
            let foundAlbum = state.albums.find(a => a.id === action.payload.id)
            if (foundAlbum) {
                state.albums = [...state.albums.filter(a => a.id !== action.payload.id), action.payload.album]
            }
        })
        builder.addCase(deleteAlbum.fulfilled, (state, action) => {
            let foundAlbum = state.albums.find(album => album.id === action.payload.id)
            if (foundAlbum){
                state.albums = state.albums.filter(album => album.id !== action.payload.id)
            }
        })
    }
    
})

export const { setSelectedAlbum, setFormMode } = albumSlice.actions
export default albumSlice.reducer