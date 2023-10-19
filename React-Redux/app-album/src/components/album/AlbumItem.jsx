import { Button, Card, ListGroup } from "react-bootstrap";
import classes from './AlbumItem.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setFormMode, setSelectedAlbum } from "./AlbumSlice";
import { useNavigate } from "react-router-dom";


const AlbumItem = ({album}) => {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const updateHandler = () => {
        dispatch(setSelectedAlbum(album))
        dispatch(setFormMode("update"))
        navigate("/album/:update")
    }
    
    const deleteHandler = () => {
        dispatch(setSelectedAlbum(album))
        dispatch(setFormMode("delete"))
        navigate("/album/:delete")
    }

    //console.log(formMode);

    return ( 
        <div className="col">
            <Card style={{ width: '15rem' }} className={`d-flex justify-content-around bg-dark text-light border-light ${classes.cardArtist}` }>
                <Card.Title className="p-3 m-auto text-center" style={{ height: '100px' }}>{album.title}</Card.Title>
                <Card.Img src={album.imgUrl} className={classes.imgArtist}/>
                <Card.Body className="d-flex flex-column justify-content-around">
                    <ListGroup variant="flush" >
                        <ListGroup.Item className="bg-dark text-light">Artiste : {album.artist}</ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-light">Date de sortie : {album.releaseDate}</ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-light">Note : {album.rating} /5</ListGroup.Item>
                    </ListGroup>
                    {
                    user && 
                    <div className="d-flex justify-content-between mt-2">
                        <Button variant="outline-warning" onClick={updateHandler}>Modifier</Button>
                        <Button variant="outline-danger" onClick={deleteHandler}>Supprimer</Button>
                    </div>
                    }
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default AlbumItem;