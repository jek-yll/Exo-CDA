import LoginComponent from './components/LoginComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const MyLogs = (value) => {
    console.log(value);
  }

  return (
    <div className='container my-2'>
      <h1>Log In</h1>
      <hr />
      <LoginComponent MyLogs={MyLogs}/> 
    </div>
  )
}

export default App
