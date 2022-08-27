import React, { useState } from "react";

export default function NovoValor() {
    
    const [frase, setFrase] = useState('Escrever a frase nos quadros de cima')
    
    return (
        <div>
            <h2>VAMOS ESCREVER UMA FRASE</h2>
            <div>
                <label>Motivação:</label>
                {/* e do onChange é o evento e target se refere ao input, o evento sempre vai olhar pra quem executa ele  */}
                <input type="text" name="txtFrase" onChange={(e) => setFrase(e.target.value)} />
                <input type="text" name="txtFrase" onClick={(e) => setFrase(e.target.value)} />

                <p>Motivação do dia : <span>{frase}</span></p>
            </div>
        </div>
    )
}