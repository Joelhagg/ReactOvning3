import { useState } from "react"

export const Calculator = () => {

    let x = 17;
    let y = '4'

    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)

    const [result, setResult] = useState(0)

    const functionA = (e: any) => {
        setFirstNumber(parseInt(e.target.value))
        console.log('firstnumber', firstNumber);
    }

    const functionB = (e: any) => {
        setSecondNumber(parseInt(e.target.value))
        console.log('secondNumber', secondNumber); 
    }

    const sumFunction = () => {
        setResult(firstNumber + secondNumber)
    } 

    const reloadSite = () => {
        window.location.reload()
    }


    return (
    <>
        <div className="divWraper">
            <h1>Övning 3</h1>
            <h2>Adderda talen</h2>
            <br />
            <legend>Funktion A</legend>
            <input type="number" onChange={functionA} value={firstNumber} min="0" ></input>
            <p>Från useState firstNumber: {firstNumber}</p>

            <br />
            <br />

            <legend>Funktion B</legend>
            <input type="number" onChange={functionB} value={secondNumber} min="0" ></input>
            <p>Från useState secondNumber: {secondNumber}</p>
            <br />

            <button onClick={sumFunction}>Lägg ihop talen</button>
            <br />
            <br />
            <legend>Resultatet:</legend>
            <h1>{result}</h1>
            <br />
            <button onClick={reloadSite}>Börja om</button>
        </div>
        
    </>
    )
    
}