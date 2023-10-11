import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const TodoDetails = () => {
    
    const [todo, setTodo] = useState({})
    const { todoId } = useParams()
    const id = +todoId

    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:3000/todos/${id}`)
        .then(response => setTodo(response.data))
        .catch(error => console.error(error))
      }, [])

    const updateClick = () => {
        navigate(`/edit/${id}?mode=edit`)
    }

    const deleteClick = () => {
        axios.delete(`http://localhost:3000/todos/${id}`)
        .then(console.log(`todo ${id} supprimé`))
        .catch(error => console.error(error))
        navigate("/")
    }

    return(
        <>
        <div className="container d-flex justify-content-center">
            <div className="card" style={{width: "15rem"}}>  
                <h2>Todo : {todo._title}</h2>
                <p>description : {todo._description}</p>
                <p>deadline : {todo._deadline}</p>
                <div className="d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={updateClick}>update</button>
                    <button className="btn btn-danger" onClick={deleteClick}>delete</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default TodoDetails