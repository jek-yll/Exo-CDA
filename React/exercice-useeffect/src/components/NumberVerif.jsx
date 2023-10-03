import { useState, useEffect } from "react"

const NumberVerif = (props) => {
    const result = props.result
    const [nbA, setNbA] = useState('')
    const [nbB, setNbB] = useState('')

    const nbaInputChange = (e) => {
        setNbA(+e.target.value)
    }
    const nbbInputChange = (e) => {
        setNbB(+e.target.value)
    }
    const nbVerif = (a, b) => {
        if ( a*b === result ){
            return `Bravo !! ${nbA} * ${nbB} = ${result}`
        } 
        return `${nbA} * ${nbB} est différent de ${result}`
    }

    const pgcd = (a,b) => {
        a = Math.abs(a);
        b = Math.abs(b);
        if (b > a) {
           let tmp = a; 
           a = b; 
           b = tmp;
        }
        while (true) {
            if (b == 0) return a;
            a %= b;
            if (a == 0) return b;
            b %= a;
        }
    }
    
    console.log(pgcd(60,36));

    const nbPremierEntreEux = (a, b) => {
        if (pgcd(a,b) === 1){
            return 'ces nombres sont premiers entre eux'
        }
        return 'ces nombres ne sont pas premiers entre eux'
    }

    useEffect(() => {
        nbPremierEntreEux(nbA, nbB)
        nbVerif(nbA, nbB)
    }, [nbA, nbB])

    return(
        <>
            <input type="text" name="nba" id="nba" onInput={nbaInputChange}/>
            <input type="text" name="nbb" id="nbb" onInput={nbbInputChange}/>
            <p>{nbVerif(nbA, nbB)}</p>
            <p>{nbPremierEntreEux(nbA, nbB)}</p>
        </>
    )
}

export default NumberVerif