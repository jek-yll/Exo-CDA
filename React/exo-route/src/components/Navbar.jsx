import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navbar = () => {

    const handleNavLinkClasses = ({isActive, isPending}) => {
        return isPending ? " " : isActive ? "nav-link active" : "nav-link"
    }

    return (
        <>  
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">eWebsite</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className={handleNavLinkClasses}  to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={handleNavLinkClasses}  to="/projets">Projet</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={handleNavLinkClasses}  to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={handleNavLinkClasses}  to="/a-propos">A propos</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className='container'>
                <Outlet/>   
            </main>
        </>
    )
}

export default Navbar