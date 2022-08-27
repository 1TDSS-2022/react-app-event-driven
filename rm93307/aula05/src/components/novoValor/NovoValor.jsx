import React, { useState } from "react";

export default function NovoValor(){

    //useState() é o valor inicial
    const [frase, setFrase] = useState('')

    return(
        <div>
            <h2>VAMOS ESCREVER UMA FRASE</h2>
            <div>
                <label> Motivação: </label>
                <input type="text" name="txtFrase" onChange={(e) => setFrase(e.target.value)}/>
                <p>Motivação do dia : <span>{frase}</span></p>
            </div>
        </div>
    )
}