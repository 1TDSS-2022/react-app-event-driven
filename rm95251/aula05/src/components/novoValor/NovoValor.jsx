import React from 'react'
import { useState } from 'react'

export default function NovoValor(){

    const [frase,setFrase] = useState('')

    return(
        <div>
            <h2>VAMOS ESCREVER UMA FRASE</h2>
            <div>
                <label>MOTIVAÇÃO:</label>
                <input type="text" name="txtFrase" onChange={(e) => setFrase(e.target.value)} />
                <input type="text" name="txtFrase" onClick={(e) => setFrase(e.target.value)} />
                <p>MOTIVAÇÃO DO DIA: <span>{frase}</span></p>
                <p>MOTIVAÇÃO DO DIA: <span>{frase}</span></p>
            </div>
        </div>
    )
}