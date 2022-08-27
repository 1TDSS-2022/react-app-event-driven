import React from "react";
import Rotas from "./routes/Rotas";
import Menu from "./Components/menu/Menu";



export default function App(){
    return(
        <div>
            <Menu/>
            <h1>Estudo Sobre eventos em Elementos  Desestrurados</h1>
            <Rotas/>
        </div>
    )
}