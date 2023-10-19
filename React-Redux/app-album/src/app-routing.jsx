import { createBrowserRouter } from "react-router-dom"
import AlbumForm from "./components/album/AlbumForm"
import HomePage from "./components/shared/HomePage"
import AlbumList from "./components/album/AlbumList"
import App from "./App"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/album/:mode",
        element: <AlbumForm/>
    }
])

export default router