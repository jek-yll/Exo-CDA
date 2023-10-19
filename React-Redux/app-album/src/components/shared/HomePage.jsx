import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAuthMode, signOutUser } from "../auth/authSlice";
import { useState } from "react";
import AuthForm from "../auth/AuthForm";
import AlbumList from "../album/AlbumList";


const HomePage = () => {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    
    const signUpHandler = () => {
        handleShow()
        dispatch(setAuthMode("S'inscrire"))
    }
    
    const signInHandler = () => {
        handleShow()
        dispatch(setAuthMode("Se connecter"))
    }

    const signOutHandler = () => {
        dispatch(signOutUser())
        dispatch(setAuthMode(""))  
    }
    
    return ( 
    <>
        <Navbar expand="lg" bg="dark" className="bg-body-tertiary" data-bs-theme="dark">
                <Navbar.Brand><i className="bi bi-disc ms-3 me-2"></i>App-album</Navbar.Brand>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            user ? 
                            <Button onClick={() => signOutHandler()}>Se déconnecter</Button> :
                            <>
                            <Button onClick={signInHandler} className="me-3">Se connecter</Button>
                            <Button onClick={signUpHandler}>S'inscrire</Button>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <AuthForm handleClose={handleClose} show={show} />
        <AlbumList />
    </>
     );
}
 
export default HomePage;