import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../contexts/TaskContext"
import DeleteButton from "./DeleteButton"
import DoneSwitch from "./DoneSwitch"

const TaskItem = ({taskId}) => {
    
    const {tasksList, setTaskList}  = useContext(TaskContext)
    const foundTask = tasksList.find(task => task.id === taskId)
    const currentIndex = tasksList.findIndex(task => task.id === taskId)
    
    const [ taskIsDone, setTaskIsDone ] = useState(foundTask.done)

    const deadlineToString = () => {
        const deadline = foundTask.deadline

        const jour = deadline.getDate().toString().padStart(2, '0')
        const mois = deadline.getMonth().toString().padStart(2, '0')
        const annee = deadline.getFullYear().toString()
        const heure = deadline.getHours().toString().padStart(2, '0')
        const minutes = deadline.getMinutes().toString().padStart(2, '0')

        const deadlineToString = ` ${jour}/${mois}/${annee} à ${heure}:${minutes}`

         return deadlineToString 
    }

    const handlerTaskIsDone = () => {
        setTaskIsDone(!taskIsDone)
        const updatedTasks = [...tasksList]
        updatedTasks[currentIndex].done = !taskIsDone
        setTaskList(updatedTasks)
    }

    useEffect(() => {
        const currentTime = new Date();
        if (foundTask.deadline < currentTime && !taskIsDone) {
            handlerTaskIsDone()
        }
    }, [foundTask, taskIsDone])

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="">
            <h3>{foundTask.name}</h3>
            <p>A effectuer avant le : {deadlineToString()}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <DoneSwitch 
                    taskId={foundTask.id} 
                    handlerTaskIsDone={handlerTaskIsDone} 
                /> 
                <DeleteButton taskId={foundTask.id} />
            </div>
        </li>
    )
}

export default TaskItem