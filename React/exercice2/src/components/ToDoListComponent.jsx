import { useState } from "react"

const ToDoListComponent = (props) => {

    const [toDoList, setToDoList] = useState([])
    const [inputValue, setInputValue] = useState("")

    const addTodo = () => {
        setToDoList([...toDoList, inputValue])
        setInputValue("")
    }
    
    const clearToDo = () => {
        setToDoList([])
    }

    const editInput = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <>
            <h2>To Do List</h2>
            <hr />
            <ul className="list-group">
                {toDoList.map((toDo, i) => <li key={i} className="list-group-item">{toDo}</li>)}
            </ul>
            <hr />
            <input className="form-control mb-2" type="text" value={inputValue} onInput={editInput}/>
            <button className="btn btn-outline-success" onClick={addTodo}>Add a To Do</button>
            <button className="ms-2 btn btn-outline-danger" onClick={clearToDo}> Clear To Do List</button>
        </>
    )
}

export default ToDoListComponent