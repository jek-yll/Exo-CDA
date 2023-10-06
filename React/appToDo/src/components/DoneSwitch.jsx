import { useRef } from "react"

const DoneSwitch = () => {
    
    const doneSwitchInpuRef = useRef()
    
    return(
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" htmlFor="done" ref={doneSwitchInpuRef}/>
        </div>
    )
}

export default DoneSwitch