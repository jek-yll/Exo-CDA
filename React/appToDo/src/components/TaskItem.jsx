import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"
import DeleteButton from "./DeleteButton"

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
        <li className="list-group-item">
            <h3>{foundTask.name}</h3>
            <p>Fin de tâche : {deadlineToString()}</p>
            <DeleteButton taskId={foundTask.id}/>
        </li>
    )
}

export default TaskItem