import { useState } from 'react';
import { AlbumContext } from './contexts/AlbumContext';
import AlbumForm from './components/AlbumForm';
import AlbumCard from './components/AlbumCard';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [albumsCollections, setAlbumsCollection] = useState([]);

  console.log(albumsCollections);

  return (
    <AlbumContext.Provider value={[albumsCollections, setAlbumsCollection]} >
      <div className="container">
        <div className="row">
          <div className="col-4">
            <AlbumForm/>
          </div>
          <div className="col-8">
            {albumsCollections.map((_, i) => (
              <AlbumCard key={i} id={i}/>
            ))}
          </div>
        </div>
      </div>
    </AlbumContext.Provider>
  )
}

export default App