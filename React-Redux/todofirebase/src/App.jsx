import SignForm from '../components/auth/SignForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskForm from '../components/task/TaskForm'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.auth.user)

  return (
    <div className='container'>
      {
        user ? <TaskForm user={user}/> : <SignForm/> 
      }
    </div>
  )
}

export default App
