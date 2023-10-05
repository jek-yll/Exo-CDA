import { useContext, useRef } from 'react';
import { AlbumContext } from '../contexts/AlbumContext';
import  Form  from './shared/Form.jsx'
import Album from './../models/Album.js';

const AlbumForm = () => {

    const [_, setMesAlbums] = useContext(AlbumContext)

    const nameInputRef = useRef()
    const artistInputRef = useRef()
    const styleInputRef = useRef()
    const durationInputRef = useRef()
    const avisInputRef = useRef()
    const imgInputRef = useRef()
    
    //const url = imgInputRef.current.value
    
    const onAddAlbum = () => {
        const name = nameInputRef.current.value
        const artist = artistInputRef.current.value
        const style = styleInputRef.current.value
        const duration = durationInputRef.current.value
        const avis = avisInputRef.current.value
        const img = imgInputRef.current.value

        if (!!name && !!artist && !!style && !!duration && !!avis && !!img){
            setMesAlbums(prevAlbums => [...prevAlbums, new Album(name, artist, style, duration, avis, img)])
        }
    }


    return(
        <Form onSubmit={onAddAlbum}>
            <img src='#' alt="img" />
            <div>
                <label className='form-label' htmlFor="name">Nom de l'Album :</label>
                <input className='form-control' type="text" ref={nameInputRef}/>
            </div>
            <div>
                <label className='form-label' htmlFor="artist">Artiste :</label>
                <input className='form-control' type="text" ref={artistInputRef}/>
            </div>
            <div>
                <label className='form-label' htmlFor="style">Genre :</label>
                <input className='form-control' type="text" ref={styleInputRef}/>
            </div>
            <div>
                <label className='form-label' htmlFor="duration">Durée :</label>
                <input className='form-control' type="text" ref={durationInputRef}/>
            </div>
            <div>
                <label className='form-label' htmlFor="avis">Avis :</label>
                <input className='form-control' type="textarea" ref={avisInputRef}/>
            </div>
            <div>
                <label className='form-label' htmlFor="img">Lien de l'image</label>
                <input className='form-control' type="text" ref={imgInputRef}/>
            </div>
            <button className='btn btn-success'>Envoyer</button>
        </Form>
    )
}

export default AlbumForm