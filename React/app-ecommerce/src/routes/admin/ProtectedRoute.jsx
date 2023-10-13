import { Navigate } from "react-router-dom"


const ProtectedRoute = (props) => {
    const user = JSON.parse(localStorage.getItem("user"))

    return user && user.role === "admin" ? (
        <>{props.children}</>
    ) : (
        <Navigate to="/login" />
    );
}

export default ProtectedRoute