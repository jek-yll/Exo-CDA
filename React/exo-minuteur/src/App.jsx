import { useState } from 'react'
import TimerForm from './components/TimerForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import Timer from './components/Timer'

function App() {

  const [timers, setTimers] = useState([])

  
  const addTimer = (newTimer) => {
    setTimers(prevTimers => [...prevTimers, newTimer]);
  }

  return (
    <div className='container'>
      <TimerForm addTimer={addTimer} />
      <hr />
      <Timer timers={timers} />
    </div>
  )
}

export default App
