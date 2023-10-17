import { Navigate } from "react-router-dom"

const ProtectedRoute = (props) => {
    const user = JSON.parse(localStorage.getItem("user"))


    return user ? (
        <>{props.children}</>
    ) : (
        <Navigate to="/signin"/>
    )
}

export default ProtectedRoute