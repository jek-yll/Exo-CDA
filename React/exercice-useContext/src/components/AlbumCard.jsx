import { useContext } from "react"
import { AlbumContext } from "../contexts/AlbumContext"


const AlbumCard = ({ id }) => {

    const [mesAlbums, _] = useContext(AlbumContext)

    console.log(id);
    console.log(mesAlbums[id]);

    const albumDetails = () => {
        console.log(
`
Nom : ${mesAlbums[id].name} 
Artiste : ${mesAlbums[id].artist} 
Style : ${mesAlbums[id].style} 
Durée : ${mesAlbums[id].duration} 
Avis : ${mesAlbums[id].name}
`);
    }

    return (
        <>
            <div className="card">
                <img src={mesAlbums[id].img} alt="img" />
                <div className="card-body">
                    <h5>{mesAlbums[id].name}</h5>
                    <ul className="list-group">
                        <li className="list-group-item">{mesAlbums[id].artist}</li>
                        <li className="list-group-item">{mesAlbums[id].style}</li>
                    </ul>
                </div>
                <button className="btn btn-primary" onClick={albumDetails}>details</button>
            </div>
        </>
    )
}

export default AlbumCard