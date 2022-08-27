import React, {useState} from "react";


const NovoValor = () => {

    const[frase, setFrase] = useState('');

    console.log(frase)

    return(
        <>

            <h2>Vamos escrever uma frase</h2>
            <div onClick={() => console.log('Texto')} >
                <label>Motivação: </label>
                <input  type="text" onInput={(e)=> e.target.value = e.target.value.toUpperCase()} name="txtFrase" onChange={(e)=> setFrase(e.target.value)}/>

                <p>Motivação do dia: <span>{frase}</span></p>
            </div>
            

        </>
    )
}


export default NovoValor;