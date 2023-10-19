import { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, signInUser, } from "./authSlice";


const AuthForm = ({handleClose, show}) => {
    
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()

    console.log(authMode);

    const submitHandler = (e) => {
        e.preventDefault()
        const credential = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        dispatch(
            authMode === "Se connecter" ? 
            signInUser(credential) : 
            signUpUser(credential))
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <h2 className="mx-3 mt-1">{authMode}</h2>
            <hr className="mx-3"/>
            <Form onSubmit={submitHandler} className="m-3">
                <Form.Group className="mb-3">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password" ref={passwordRef} />
                </Form.Group>
                <Button variant="success" type="submit" className="d-block ms-auto" >
                    {authMode}
                </Button>
            </Form>
        </Modal>
    );
}

export default AuthForm;