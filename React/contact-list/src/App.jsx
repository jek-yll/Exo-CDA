import { NavLink, Link, Outlet } from "react-router-dom"
import ContactContext from "./contexts/ContactContext"
import { useState } from "react"

function App() {

    const [contacts, setContacts] = useState([])

    const handleNavLinkClasses = ({ isActive, isPending }) => {
        return isPending ? " " : isActive ? "nav-link active" : "nav-link"
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">eContacts</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className={handleNavLinkClasses} to="/">Accueil</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={handleNavLinkClasses} to="/contacts">Contacts</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className='container'>
                <ContactContext.Provider value={{ contacts, setContacts }}>
                    <Outlet />
                </ContactContext.Provider>
            </main>
        </>
    )
}

export default App
