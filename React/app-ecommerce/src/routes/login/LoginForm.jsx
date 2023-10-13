import { useContext, useRef } from "react"
import Form from "../../shared/Form"
import UserRoleContext from "../../contexts/UserContext"
import { getAllUsers } from "../../services/api"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

    const { user, setUser } = useContext(UserRoleContext)

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const navigate = useNavigate()

    const submitHandler = () => {

        const email = emailInputRef.current.value
        const password = passwordInputRef.current.value

        getAllUsers()
            .then((response) => {
                if (response.status === 200) {
                    const users = response.data;
                    const matchingUser = users.find((u) => u.email === email && u.password === password);
                    if (matchingUser) {
                        const userStocked = {
                            email: matchingUser.email,
                            role: matchingUser.role
                        }
                        localStorage.setItem('user', JSON.stringify(userStocked));
                        setUser(userStocked)
                        userStocked.role === 'admin' ? navigate('/admin') : navigate('/')
                    } else {
                        alert("Identifiants incorrects");
                    }
                } else {
                    alert("Echec de la récupération des users");
                }
            })
            .catch((error) => {
                console.error("Erreur API:", error)
            })
    }

    return (
        <>
            <h1>Se connecter</h1>
            <Form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label
                        htmlFor="email"
                        className="form-label"
                    >
                        Email :
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        ref={emailInputRef}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                        Password :
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="name@example.com"
                        ref={passwordInputRef}
                    />
                </div>
                <button className="btn btn-primary">
                    Se connecter
                </button>
            </Form>
        </>
    )
}

export default LoginForm