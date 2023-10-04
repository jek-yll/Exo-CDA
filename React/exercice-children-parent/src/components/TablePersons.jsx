const TablePersons = (props) => {

    const { users } = props

        return (
            <>
                <h1>Persons</h1>
                <hr />
                <table className="table table-warning table-striped table-hover table-bordered border-danger">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Birth of Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => 
                        <tr key={i}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.birthDate}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </>
        )
}

export default TablePersons