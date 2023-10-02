const ContactList = (props) => {
    const { persons } = props
    console.log(persons);

    if(persons) {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person, i) =>
                        <tr key={i}>
                            <th>{person.id}</th>
                            <td>{person.firstname}</td>
                            <td>{person.lastname}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    } else {
    return (        
        <p>
            Vous n'avez pas de contact à afficher
        </p>
    )}
    
}

export default ContactList