import { useState } from "react"

const FizzBuzz = (props) => {
    const max = props.max
    const [count, setCount] = useState(0)  
    
    let nb = count

    const oneMore = () => {
        nb <= max-1 && setCount(nb = count + 1)
    }

    const oneLess = () => {
        nb >= 1 && setCount(nb = count - 1)
    }

    const FizzOrBuzz = (nb) => {
        if (nb % 3 == 0 && nb % 5 == 0){
            return (nb = "FizzBuzz")
        } if (nb % 3 == 0) {
            return (nb = "Fizz")
        } if (nb % 5 == 0) {
            return (nb = "Buzz")
        } else {
            return nb
        }
    }

    return(
        <>
            <h1>FizzBuzz, Max : {max}</h1>
            <div className="d-flex justify-content-between">
                <button onClick={oneLess}>-</button>
                <h2>{FizzOrBuzz(nb)}</h2>
                <button onClick={oneMore}>+</button>
            </div>
        </>
    )
}

export default FizzBuzz