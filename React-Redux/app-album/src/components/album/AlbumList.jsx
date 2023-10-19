import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAlbums, setFormMode, setSelectedAlbum } from "./AlbumSlice";
import AlbumItem from "./AlbumItem";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AlbumList = () => {

    const albums = useSelector(state => state.album.albums)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getAllAlbums())
    }, [])

    console.log(albums);

    const addBtnHandler = () => {
        dispatch(setSelectedAlbum(null))
        dispatch(setFormMode("add"))
        navigate("/album/:add")
    }

    return ( 
        <div className="bg-dark text-light rounded p-2 m-2">  
            <div className={`d-flex justify-content-between my-3 `}>
            <h2>Galerie</h2>
            { user &&  <Button variant="outline-success" onClick={addBtnHandler}>Ajouter un album</Button>}
            </div>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {
                albums.map((a, key) => (
                    <AlbumItem key={key} album={a}/>
                ))
            }
            </div>
        </div>
     );
}
 
export default AlbumList


