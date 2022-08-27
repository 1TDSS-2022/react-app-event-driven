import React from "react";
import MinhasRotas from './routes/MinhasRotas'
import Menu from './components/menu/Menu'

export default function app() {
    return(
        <div>
            <h1>ESTUDO SOBRE EVENTOS EM ELEMENTOS DESESTRUTURADOS</h1>
            <Menu/>
            <MinhasRotas/>
        </div>
    )
}