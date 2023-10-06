import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"
import DeleteButton from "./DeleteButton"
import DoneSwitch from "./DoneSwitch"

const TaskItem = ({taskId}) => {
    
    const context = useContext(TaskContext)
    const foundTask = context.tasksList.find(task => task.id === taskId)

    const deadlineToString = () => {
        const deadline = foundTask.deadline

        const jour = deadline.getDate().toString().padStart(2, '0')
        const mois = deadline.getMonth().toString().padStart(2, '0')
        const annee = deadline.getFullYear().toString()
        const heure = deadline.getHours().toString().padStart(2, '0')
        const minutes = deadline.getMinutes().toString().padStart(2, '0')

        const deadlineToString = `le ${jour}/${mois}/${annee} à ${heure}:${minutes}`

         return deadlineToString 
    }

    return (
        <li className="list-group-item ">
            <div className="d-flex justify-content-between align-items-center">
            <h3>{foundTask.name}</h3>
            <div className="d-flex justify-content-center align-items-center">
                <DoneSwitch taskId={foundTask.id}/> 
                <DeleteButton taskId={foundTask.id}/>
            </div>
            </div>
            <p>Fin de tâche : {deadlineToString()}</p>
        </li>
    )
}

export default TaskItem