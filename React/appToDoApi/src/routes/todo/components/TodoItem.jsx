import { useNavigate } from "react-router-dom"
import axios from "axios"

const TodoItem = ({todo}) => {
   
    const id = todo.id
    const navigate = useNavigate()

    const detailsClick = () => {
        navigate(`/details/${id}`)
    }

    return(
        <div className="d-flex justify-content-between my-3">
            <h2>{todo._title}</h2>
            <button className="btn btn-outline-primary" onClick={detailsClick}>Details</button>
        </div>
    )
}
export default TodoItem