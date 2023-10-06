import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../contexts/TaskContext"
import TaskItem from "./TaskItem"

const TasksListContainer = () => {

    const { tasksList } = useContext(TaskContext)

    return(
        <>
        <h2>Mes tâches </h2>
        <div className="list-group">
            {tasksList.map((task) => (
                <TaskItem key={task.id} taskId={task.id}/> 
            ))}
        </div>
        </>
    )
}

export default TasksListContainer