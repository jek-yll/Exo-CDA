import { useState } from "react"
import { useEffect } from "react"

const Timer = (props) => {
    
    const { timers } = props
    const { time, setTime } = useState(timers.time)

    const startChrono = () => {
        setTimeout(() => {
            setTime(time-1)
        }, timers.time*1000)
    }

    if(!timers || timers?.length === 0){
     return <p>Pas de chrono en cours</p>   
    } else {
        return(
            <>
                <div>
                    {timers.map(
                        (timer, i) => <div key={i}>
                            <p>Name : <span>{timer.name}</span></p>
                            <p>Time : <span>{startChrono}</span></p>
                        </div>
                    )}
                </div>
            </>
        )
    }

}

export default Timer