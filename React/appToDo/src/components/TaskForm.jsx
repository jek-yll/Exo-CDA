import { useContext, useEffect, useRef, useState } from "react"
import { TaskContext } from "../contexts/TaskContext"
import Form from "./shared/Form"
import Task from "../models/Task"

const TaskForm = () => {
    const { setTaskList } = useContext(TaskContext)
    const [formIsValid, setFormIsValid] = useState(false)
    const [name, setName] = useState('')
    const [deadlineDay, setDeadlineDay] = useState('')
    const [deadlineHour, setDeadlineHour] = useState('')

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

    useEffect(() => {
        const name = taskNameInputRef.current.value
        const deadlineDay = deadlineDayInputRef.current.value
        const deadlineHour = deadlineHourInputRef.current.value

        const isValid = name.trim() !== "" && deadlineDay.trim() !== "" && deadlineHour.trim() !== ""

        setFormIsValid(isValid)
        console.log(isValid)
    }, [name, deadlineDay, deadlineHour])

    
    return(
        <Form onSubmit={submitFormHandler}>
            <div className="my-4">
                <label className="form-label" htmlFor="name">Tâche :</label>
                <input 
                    className="form-control" 
                    type="text" 
                    ref={taskNameInputRef}
                    onInput={setName}
                    required
                />
            </div>
            <div className="my-4">
                <label className="form-label" htmlFor="deadline">Fin de la tâche :</label>
                <div className="d-flex">
                <input 
                    className="form-control" 
                    type="date" 
                    name="deadline-day" 
                    id="deadline-day" 
                    ref={deadlineDayInputRef}
                    onInput={setDeadlineDay} 
                    required
                />
                <input 
                    className="form-control" 
                    type="time" 
                    name="deadline-hour" 
                    id="deadline-hour" 
                    ref={deadlineHourInputRef}
                    onInput={setDeadlineHour} 
                    required 
                />
                </div>
            </div>
            <button 
                className="btn btn-outline-success" 
                disabled={!formIsValid}
            >
                Ajouter la tâche
            </button>
        </Form>
    )
}

export default TaskForm