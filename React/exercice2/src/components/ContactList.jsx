const ContactList = (props) => {
    const { persons } = props

    if (!persons || persons?.length === 0) {
        return (
            <p>
                Vous n'avez pas de contact à afficher
            </p>
        )
    } else {
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
    }
}

export default ContactList