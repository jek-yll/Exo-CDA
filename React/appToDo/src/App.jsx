import { TaskContext } from './contexts/TaskContext';
import { useState } from 'react';
import TaskForm from './components/TaskForm'
import TasksListContainer from './components/TasksListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

function App() {
  
  const [tasksList, setTaskList] = useState([])

  return (
    <div className='container-fluid'>  
      <TaskContext.Provider value={{tasksList, setTaskList}}>
          <div className='row m-4'>
            <div className='col-4'>
            <TaskForm/>
            </div>
            <div className='col-8'>
            <TasksListContainer/>
            </div>
          </div>
      </TaskContext.Provider>
    </div>
  )
}

export default App
