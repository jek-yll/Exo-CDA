import { useContext, useEffect, useRef } from "react"
import { TaskContext } from "../contexts/TaskContext"

const DoneSwitch = ({ taskId, handlerTaskIsDone }) => {
    
    const  context   = useContext(TaskContext)
    const foundTask = context.tasksList.find(task => task.id === taskId)
    const switchInputRef = useRef()

    useEffect(() => {
        switchInputRef.current.defaultChecked = foundTask.done
    }, [foundTask.done])


    return(
        <div className="form-check form-switch">
            <input 
                className="form-check-input" 
                type="checkbox" 
                htmlFor="done"
                ref={switchInputRef} 
                onChange={handlerTaskIsDone}
            />
        </div>
    )
}

export default DoneSwitch