import { useState } from 'react'
import './App.css'
import FizzBuzz from './components/FizzBuzz'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [max, setMax] = useState(42)

  

  const changeMax = (event) => {
    setMax(event.target.value)
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <label className="col-auto mx-4" htmlFor="max">Nombre max </label>
        <input className="form-control" type="number" name="max" id="max" onInput={changeMax}/>
      </div>
      <FizzBuzz max={max}/>
    </>
  )
}

export default App
