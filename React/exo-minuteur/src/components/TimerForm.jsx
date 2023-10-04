import { useRef } from 'react'
import  Form  from './shared/Form'

const TimerForm = (props) => {

    const { addTimer } = props

    const nameTimerInputRef = useRef()
    const timeTimerInputRef = useRef()

    const timerSubmitted = () => {
        addTimer({
            name: nameTimerInputRef.current.value,
            time: timeTimerInputRef.current.value
        })
    }


    return(
        <Form onSubmit={timerSubmitted}>  
            <div>
                <label htmlFor="name">Nom du chrono :</label>
                <input type="text" name="name" id="name" ref={nameTimerInputRef} />
            </div>
            <div>
                <label htmlFor="time">Temps :</label>
                <input type="number" name="time" id="time" ref={timeTimerInputRef}/>
            </div>
            <button>Nouveau chrono</button>
        </Form>
    )
}

export default TimerForm