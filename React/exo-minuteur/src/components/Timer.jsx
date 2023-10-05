import { useState } from "react"
import { useEffect } from "react"

const Timer = (props) => {
    
    const { timers } = props
    const [ time, setTime ] = useState(0)

    const timeBase = () => {
        setTime(timers[timers.length-1].time)
    }

    useEffect(() => {
        timeBase()
        return (
            console.log('fin')
        )
    }, [])
    
    //console.log(index());

    if(!timers || timers?.length === 0){
     return <p>Pas de chrono en cours</p>   
    } else {
        return(
            <>
                <div>
                    {timers.map(
                        (timer, i) => <div key={i}>
                            <p>Name : <span>{timer.name}</span></p>
                            <p>Chrono : <span>{time}</span></p>
                        </div>
                    )}
                </div>
            </>
        )
    }

}

export default Timer