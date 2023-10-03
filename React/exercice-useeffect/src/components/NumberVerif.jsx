import { useState, useEffect } from "react"

const NumberVerif = (props) => {
    const result = props.result
    const [nbA, setNbA] = useState('')
    const [nbB, setNbB] = useState('')

    const nbaInputChange = (e) => {
        setNbA(e.target.value)
    }
    const nbbInputChange = (e) => {
        setNbB(e.target.value)
    }
    const nbVerif = (a, b) => {
        if ( a*b === result ){
            return `Bravo !! ${nbA} * ${nbB} = ${result}`
        } 
        return `${nbA} * ${nbB} est différent de ${result}`
    }

    useEffect(() => {
        nbVerif(nbA, nbB)
    }, [nbA, nbB])

    return(
        <>
            <input type="text" name="nba" id="nba" onInput={nbaInputChange}/>
            <input type="text" name="nbb" id="nbb" onInput={nbbInputChange}/>
            <p>{nbVerif(nbA, nbB)}</p>
        </>
    )
}

export default NumberVerif