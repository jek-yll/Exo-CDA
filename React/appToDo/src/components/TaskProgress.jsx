import { useRef, useState, useContext, useEffect } from "react"
import { TaskContext } from "../contexts/TaskContext"
import classes from '../assets/TaskProgress.module.css'

const TaskProgress = (props) => {

    const { taskId } = props
    const  context   = useContext(TaskContext)
    const foundTask = context.tasksList.find(task => task.id === taskId)
    const baseTime = foundTask.deadline
    const jaugeRef = useRef()

     const [currentTime, setCurrentTime] = useState(baseTime)

     // console.log(baseTime);

     useEffect(() => {
        jaugeRef.current.style.right = `${getPercent()}%`
        jaugeRef.current.style.filter = `hue-rotate(${getPercent() * 3.6}deg)`

        let interval 

        if (currentTime !== 0) {
            interval = setInterval(() => {
                setCurrentTime(currentTime - 1)
            }, 100)
        }

        return () => {
            if (interval) {
                clearInterval(interval)
                interval = undefined
            }
        }
    })

    const getPercent = () => {
        return Math.floor(100 - ((currentTime / baseTime) *100))
    }

    return (
        <div className={classes.jaugDisplay}>
            <span>{getPercent()}%</span>
            <div ref={jaugeRef}></div>
        </div>
    )
}

export default TaskProgress