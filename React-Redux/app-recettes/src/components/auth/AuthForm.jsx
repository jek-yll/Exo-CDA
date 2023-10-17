import { useRef } from "react";
import { setUser } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()
    
    const sumbmitHandler = async (e) => {
        e.preventDefault()

        const email = emailRef.current.value
        const password = emailRef.current.value

        const credentials = {
            email,
            password,
            returnSecureToken: true
        }

        const URL = authMode === "Se connecter" ? SIGN_IN_URL : SIGN_UP_URL

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            if(!response.ok) {
                // console.dir(response);
                throw new Error("Something went wrong during the POST" ) 
            }

            const data = await response.json()

            localStorage.setItem("token", data.idToken)
            localStorage.setItem("user", true)
            dispatch(setUser(data))
            navigate("/recipes")

        } catch(error) {
            console.error(error.message);
        }
    }

    return ( 
        <form onSubmit={sumbmitHandler}>
            <h2>{authMode}</h2>
            <hr />
            <div>
            <label className="form-label" htmlFor="email">Adresse mail :</label>
            <input 
                className="form-control"
                type="email" 
                name="email" 
                id="email"
                ref={emailRef} 
                
            />
            </div>
            <div>
                <label className="form-label" htmlFor="password">Mot de Passe :</label>
                <input 
                    className="form-control"
                    type="password" 
                    name="password" 
                    id="password" 
                    ref={passwordRef}
                    
                />
            </div>
            <div className="mt-2 d-flex justify-content-end">
                <button 
                    className="btn btn-success"
                >
                    {authMode}
                </button>
            </div>
        </form>
     );
}
 
export default AuthForm;