import { useContext, useRef } from "react"
import { TaskContext } from "../contexts/TaskContext"
import Form from "./shared/Form"
import Task from "../models/Task"

const TaskForm = () => {
    const { setTaskList } = useContext(TaskContext)

    const taskNameInputRef = useRef()
    const deadlineDayInputRef = useRef()
    const deadlineHourInputRef = useRef()

    const submitFormHandler = () => {
        const name = taskNameInputRef.current.value
        const deadlineDay = deadlineDayInputRef.current.value
        const deadlineHour = deadlineHourInputRef.current.value

        const dateString = deadlineDay + ' ' + deadlineHour
        const dateParse = dateString.split(/[\s-:]+/)

       const deadlineDate = new Date(
        parseInt(dateParse[0]),
        parseInt(dateParse[1]) -1,
        parseInt(dateParse[2]),
        parseInt(dateParse[3]),
        parseInt(dateParse[4])
       )

        const newTask = new Task(name, deadlineDate)
        setTaskList((preTasks => [...preTasks, newTask]))

    }

    
    return(
        <Form onSubmit={submitFormHandler}>
            <div className="my-4">
                <label className="form-label" htmlFor="name">Tâche :</label>
                <input className="form-control" type="text" ref={taskNameInputRef} required/>
            </div>
            <div className="my-4">
                <label className="form-label" htmlFor="deadline">Fin de la tâche :</label>
                <div className="d-flex">
                <input className="form-control" type="date" name="deadline-day" id="deadline-day" ref={deadlineDayInputRef} required/>
                <input className="form-control" type="time" name="deadline-hour" id="deadline-hour" ref={deadlineHourInputRef}/>
                </div>
            </div>
            <button className="btn btn-outline-success">Ajouter la tâche</button>
        </Form>
    )
}

export default TaskForm