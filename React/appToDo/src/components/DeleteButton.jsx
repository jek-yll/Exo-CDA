import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

const DeleteButton = ({taskId}) => {
    
    const {tasksList, setTaskList}  = useContext(TaskContext)

    const foundTask = tasksList.find(task => task.id === taskId)

    const removeTask = () => {
        setTaskList(prevTasks => prevTasks.filter(t => t.id !== foundTask.id))
    }


    return (
        <button className="btn btn-danger" onClick={removeTask}>Supprimer la tâche</button>
    )
}

export default DeleteButton