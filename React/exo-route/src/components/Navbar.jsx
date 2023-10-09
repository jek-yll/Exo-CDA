import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">eWebsite</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active"  to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active"  to="/projets">Projet</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active"  to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active"  to="/a-propos">A propos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='container'>

        <Outlet/>
        </div>
        </>
    )
}

export default Navbar