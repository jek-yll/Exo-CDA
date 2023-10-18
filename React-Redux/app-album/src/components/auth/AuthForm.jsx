import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, signInUser, signInFetch, signUpFetch } from "./authSlice";


const AuthForm = () => {
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        const credential = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        dispatch(signUpUser(credential))
    }

    return (
        <>
            <h2>{authMode}</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label className="mb-3">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password" ref={passwordRef} />
                </Form.Group>
                <Button variant="success" type="submit">
                    {authMode}
                </Button>
            </Form>
        </>
    );
}

export default AuthForm;