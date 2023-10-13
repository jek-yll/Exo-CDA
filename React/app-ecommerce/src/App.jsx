import { Link, Outlet } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null)
  // const [cartNbItems, setCartNbItems] = useState(0)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  // console.log(user)

  const logOut = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">eCommerce-App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className='nav-link' to={user && user.role === 'admin' ? '/admin' : '/'}>Les produits</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                {!user ?
                  <li className="nav-item">
                    <Link className='nav-link' to="/login">Se connecter</Link>
                  </li> :
                  <>
                    <span className='navbar-text'><i>*{user.role}*</i></span>
                    <li className="nav-item">
                      <Link className='nav-link' to="/" onClick={logOut}>Se déconnecter</Link>
                    </li>
                  </>
                }
                {!user || user.role === "client" ?
                  <li className="nav-item">
                    <Link className='nav-link' to="/cart">Mon panier</Link>
                  </li> :
                  undefined
                }
              </ul>
            </div>
          </div>
        </nav >
      </header >
      <main>
        <div className='container p-2'>
          <Outlet />
        </div>
      </main>
    </UserContext.Provider>
  )
}

export default App
