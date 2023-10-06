import { useRef } from "react"

/*
ToDo : Faire en sorte que le switch soit checked lorsque Task.done = true 
Si la deadline est passé ou si l'utilisateur checked par lui même
Dans ce cas set task.done a true.
*/
const DoneSwitch = () => {
    
    const doneSwitchInpuRef = useRef()
    
    return(
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" htmlFor="done" ref={doneSwitchInpuRef}/>
        </div>
    )
}

export default DoneSwitch