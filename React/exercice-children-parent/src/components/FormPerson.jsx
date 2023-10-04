import { useState } from "react"

const FormPerson = (props) => {

    const { addUser } = props
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const submitHandler = () => {
        addUser({
            firstname: firstname,
            lastname: lastname,
            birthDate: birthDate
        })
    }

    const firstnameInputChange = (e) => {
        setFirstname(e.target.value)
    }
    const lastnameInputChange = (e) => {
        setLastname(e.target.value)
    }
    const birthDateInputChange = (e) => {
        setBirthDate(e.target.value)
    }

    return (
        <form action="#" onSubmit={submitHandler}>
            <h1>Add a person</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Firstname</label>
                <input type="text" className="form-control" id="firstname" placeholder="firstname" onInput={firstnameInputChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Lastname</label>
                <input type="text" className="form-control" id="lastname" placeholder="lastname" onInput={lastnameInputChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">Birth Date</label>
                <input type="date" className="form-control" id="birthDate" placeholder="birth date" onInput={birthDateInputChange}/>
            </div>
            <button className="btn btn-outline-success" >Add a Person</button>
        </form>
    )
}

export default FormPerson