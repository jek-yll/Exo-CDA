import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import TodoItem from "./components/TodoItem"
import todoContext from "./contexts/todoContext"

const TodosList = () => {
    
    const  {todos, setTodos}  = useContext(todoContext)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/add")
    }
    
    useEffect(() => {
        axios.get("http://localhost:3000/todos")
        .then(response => setTodos(response.data))
        .catch(error => console.error(error))
      }, [])

    console.log(todos);

    return(
        <>
            <div className="d-flex justify-content-between mt-3">
            <h1>Mes Todos :</h1>
            <button className="btn btn-outline-success" onClick={handleClick}>Add Todo</button>
            </div>
            <hr />
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </>
    )
}

export default TodosList