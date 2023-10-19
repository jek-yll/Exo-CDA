import { useEffect, useRef, useState } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAlbum, deleteAlbum, editAlbum, setFormMode, setSelectedAlbum } from "./AlbumSlice";
import { useNavigate } from "react-router-dom";

const AlbumForm = () => {

    const dispatch = useDispatch()
    const formMode = useSelector(state => state.album.formMode)
    const selectedAlbum = useSelector(state => state.album.selectedAlbum)
    const navigate = useNavigate()

    const titleRef = useRef()
    const artistRef = useRef()
    const releaseDateRef = useRef()
    const ratingRef = useRef()
    const urlRef = useRef()
 
    const userToken = localStorage.getItem("token")

    console.log(selectedAlbum);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newAlbum = {
            title: titleRef.current.value,
            artist: artistRef.current.value,
            releaseDate: releaseDateRef.current.value,
            rating: ratingRef.current.value,
            imgUrl: urlRef.current.value
        }
        if (formMode === "add") {
            dispatch(addAlbum({album:newAlbum, token: userToken}))

        } else if(formMode === "update") {
            dispatch(editAlbum({album:newAlbum, token: userToken, id: selectedAlbum.id}))
        } else {
            dispatch(deleteAlbum({id: selectedAlbum.id, token: userToken}))
        }
        navigate("/")
    }

    return (
        <>
            <h2>Ajouter un album</h2>
            <Form onSubmit={handleSubmit} className="">
                <Row>
                    <Form.Group as={Col} className="m-3">
                        <Form.Label>Titre :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            ref={titleRef}
                            defaultValue={selectedAlbum ? selectedAlbum.title : ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col} className="m-3">
                        <Form.Label>Artiste :</Form.Label>
                        <Form.Control
                            type="text"
                            ref={artistRef}
                            defaultValue={selectedAlbum && selectedAlbum.artist}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} className="m-3">
                        <Form.Label>Date de sortie</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder=""
                            ref={releaseDateRef}
                            defaultValue={selectedAlbum && selectedAlbum.releaseDate}
                        />
                    </Form.Group>
                    <Form.Group as={Col} className="m-3">
                        <Form.Label>Note :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            ref={ratingRef}
                            defaultValue={selectedAlbum && selectedAlbum.rating}
                        />
                    </Form.Group>
                </Row>
                    <Form.Group className="m-3">
                        <Form.Label>Image :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            ref={urlRef}
                            defaultValue={selectedAlbum && selectedAlbum.imgUrl}
                        />
                    </Form.Group>
                    {
                        formMode === "update" ?
                        <div className="d-flex justify-content-end">
                            <Button type="submit" variant="warning"  className="m-3">Modifier</Button>
                            <Button variant="danger" className="m-3">Annuler</Button>
                        </div> :
                        formMode === "delete" ?
                            <Button type="submit"  variant="danger" className="d-block ms-auto m-3">Supprimer</Button> :
                        formMode === "add"   ?
                            <Button type="submit"  variant="primary" className="d-block ms-auto m-3">Ajouter</Button> :
                            <></>
                    }
            </Form>
            </>
    );
}

export default AlbumForm;