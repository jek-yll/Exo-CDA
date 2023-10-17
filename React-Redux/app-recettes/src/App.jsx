import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { removeUser, setAuthMode } from './components/auth/authSlice'

function App() {

  // const user = useSelector(state => state.auth.user)
  const localUser = JSON.parse(localStorage.getItem("user"))

  const dispatch = useDispatch()
  //const user = true

  const logout = () => {
    dispatch(removeUser())
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">eRecipes</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {
                    localUser ? 
                    <Link className='nav-link' to="/" onClick={() => dispatch(removeUser())}>Se déconnecter</Link> :
                    <>
                    <div className='d-flex'>
                    <Link className="nav-link" to="/signin" onClick={() => dispatch(setAuthMode("Se connecter"))}>Se connecter</Link>
                    <Link className='nav-link' to="/signin" onClick={() => dispatch(setAuthMode("S'inscrire"))}>S'inscrire</Link>
                    </div>
                    </>
                  }
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className='container'>
        <Outlet />
      </main>
    </>


  )
}

export default App
