import React from "react";
import { useState } from "react";

export default function NovoValor() {

    //No caso, o use state espera uma string
    //Portanto, para atualizar atribua para o set
    const [frase, setFrase] = useState('');


    //ao colocar uma variavel no arrow function, ela
    //sera automaticamente atribuida ao this
    return (
    <div>
        <h2>VAMOS ESCREVER UMA FRASE</h2>
        <div>
            <label>Motivação: </label>
            <input type="text" name="txtFrase" onChange={(e) => setFrase(e.target.value)}/>
            <p>Motivação do dia: <span>{frase}</span></p>
        </div>
    </div>
    )
}