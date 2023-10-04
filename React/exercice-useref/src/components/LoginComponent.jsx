import { useRef } from 'react'

const LoginComponent = (props) => {

    const { MyLogs } = props

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const login = () => {
        MyLogs({
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
        })
    }

    return(
        <>
            <div>
                <label className='form-label' htmlFor="email">Email :</label>
                <input className="form-control" type="mail" name="email" id="email" ref={emailInputRef} />
            </div>
            <div>
                <label className='form-label' htmlFor="password">Password :</label>
                <input className="form-control" type="password" name="password" id="password" ref={passwordInputRef} />
            </div>
            <button className='btn btn-outline-success mt-2' onClick={login}>Login</button>
        </>
    )
}

export default LoginComponent