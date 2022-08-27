import React from "react";
import MinhasRoutas from "./routes/MinhasRotas";
import Menu from "./components/menu/Menu"

export default function App(){
    return(
        <div>
            <Menu />
            <h1>EVENTOS EM ELEMENTOS DESESTRUTURADOS!</h1>
            <MinhasRoutas/>
        </div>
    )
}