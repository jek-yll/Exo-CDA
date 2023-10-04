import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import FormPerson from "./components/FormPerson"
import TablePersons from "./components/TablePersons"

function App() {
  const [users, setUsers] = useState([])

  const addUser = (u) => {
    //setUsers([...users, u])
    setUsers(prevState => ([...prevState, u]))
    console.log(users);
  }

  return (
    <>
      <div className="container my-2">
        <FormPerson addUser={addUser}/>
        <TablePersons users={users}/>
      </div>
    </>
  )
}

export default App
