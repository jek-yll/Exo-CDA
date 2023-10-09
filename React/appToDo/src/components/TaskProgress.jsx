import { useRef, useState, useContext, useEffect } from "react"
import { TaskContext } from "../contexts/TaskContext"
import classes from './TaskProgress.module.css'

const TaskProgress = (props) => {

    const { taskId } = props
    const  context   = useContext(TaskContext)
    const foundTask = context.tasksList.find(task => task.id === taskId)
    const deadline = foundTask.deadline
    const jaugeRef = useRef()

     const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(deadline));

     // console.log(baseTime);

     useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => {
                if (prevRemainingTime > 0) {
                    return prevRemainingTime - 1;
                }
                return 0;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        jaugeRef.current.style.right = `${getPercent()}%`;
        jaugeRef.current.style.filter = `hue-rotate(${getPercent() * 3.6}deg)`;
    }, [remainingTime, deadline]);

    function calculateRemainingTime(deadline) {
        const now = new Date();
        const deadlineDate = new Date(deadline);
        const remainingMilliseconds = Math.max(0, deadlineDate - now);
        return Math.ceil(remainingMilliseconds / 1000); // Convert milliseconds to seconds and round up
    }

    function getPercent() {
        return Math.floor((remainingTime / (calculateRemainingTime(deadline) || 1)) * 100);
    }
    
    /* const deadlineToString = () => {
        const deadline = remainingTime

        const jour = deadline.getDate().toString().padStart(2, '0')
        const mois = deadline.getMonth().toString().padStart(2, '0')
        const annee = deadline.getFullYear().toString()
        const heure = deadline.getHours().toString().padStart(2, '0')
        const minutes = deadline.getMinutes().toString().padStart(2, '0')

        const deadlineToString = ` ${jour}/${mois}/${annee} à ${heure}:${minutes}`

         return deadlineToString 
    } */


    //const remainingTimeDate = new Date(remainingTime)

    //console.log(remainingTimeDate);

    return (
        <div className={classes.jaugeDisplay}>
            <span>{deadlineToString()}</span>
            <div ref={jaugeRef}></div>
        </div>
    )
}

export default TaskProgress