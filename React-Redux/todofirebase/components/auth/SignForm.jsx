import { useDispatch, useSelector } from "react-redux";
import { setAuthMode, setUser } from "./authSlice";
import { useRef } from "react";
import { SIGN_IN, SIGN_UP } from "../../src/firebaseConfig";


const SignForm = () => {
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()
    
    const handlerSubmit = async (e) => {
        e.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        const credencials = {
            email,
            password,
            returnSecureToken: true
        }

        const URL = authMode === "Sign In" ? SIGN_IN : SIGN_UP

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credencials)
            })

            if(!response.ok) {
                throw new Error("Something went wrong during the " + authMode)
            }

            const data = await response.json()
            console.log(data);

            localStorage.setItem("token", data.idToken)
            dispatch(setUser(data))

        } catch(error) {
            console.error(error.message)
        }
    }

    const handlerAuthMode = () => {
        dispatch(setAuthMode(
            authMode === "Sign Up" ? "Sign In" : "Sign Up"
        ))
    }

    return ( 
        <>
            <h3>{authMode}</h3>
            <hr />
            <form onSubmit={handlerSubmit}>
                <div>
                    <label htmlFor="email" className="label-form">Email: </label>
                    <input className="form-control m-2" type="email" name="email" id="email" ref={emailRef}/>
                </div>        
                <div> 
                    <label htmlFor="password" className="label-form">Password:</label>
                    <input className="form-control m-2" type="password" id="password" ref={passwordRef}/>
                </div>
                <button className="btn btn-success my-2">{authMode}</button>
           </form>
           <button className="btn btn-dark" onClick={handlerAuthMode}>{authMode === "Sign Up" ? "Sign In" : "Sign Up"}</button>        
        </>
     );
}
 
export default SignForm;