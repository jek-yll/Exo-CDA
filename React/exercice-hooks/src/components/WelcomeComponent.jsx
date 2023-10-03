import { useState } from "react"

const WelcomeComponent = () => {
    const [person, setPerson] = useState({
        firstname: 'jean',
        lastname: 'Dupond'
    })

    const editInputFirstname = (event) => {
        setPerson(prevState => ({...prevState, firstname: event.target.value}))
    }
    const editInputLastname = (event) => {
        setPerson(prevState => ({...prevState, lastname: event.target.value}))
    }
    
    return (
        <>  
            <div>
                <label for="firstname" class="form-label">Prénom :</label>
                <input type="text" className="form-control" for="firstname" onInput={editInputFirstname}/>
            </div>
            <div>
                <label for="lastname" class="form-label">Nom :</label>
                <input type="text" className="form-control" for="lastname" onInput={editInputLastname}/>
            </div>
            <p className="text-center my-2">
                Bonjour <span className="text-capitalize">{person.firstname}</span> <b className="text-uppercase">{person.lastname}</b>, bienvenue sur l'application !
            </p>
        </>
    )
}

export default WelcomeComponent