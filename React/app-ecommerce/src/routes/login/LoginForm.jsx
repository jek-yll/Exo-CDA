import Form from "../../shared/Form"

const LoginForm = () => {

    const submitHandler = () => {
        
    }

    return (
        <>
            <h1>Se connecter</h1>
            <Form onSubmit={submitHandler}> 
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email :</label>
                    <input type="text" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input type="password" className="form-control" id="password" placeholder="name@example.com" />
                </div>
                <button className="btn btn-primary">
                    Se connecter
                </button>
            </Form>
        </>
    )
}

export default LoginForm