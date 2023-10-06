import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

const DeleteButton = ({taskId}) => {
    
    const {tasksList, setTaskList}  = useContext(TaskContext)
    const foundTask = tasksList.find(task => task.id === taskId)

    const removeTask = () => {
        setTaskList(prevTasks => prevTasks.filter(t => t.id !== foundTask.id))
    }

    return (
        <button 
            className="btn btn-outline-danger border-0 p-0" 
            onClick={removeTask}
            disabled={!foundTask.done}
        >
            <i className="bi bi-x fs-2"></i>
        </button>
    )
}

export default DeleteButton