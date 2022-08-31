import React from "react"
import MinhasRotas from "./routes/MinhasRotas"
import Menu from "./components/menu/Menu"

export default function App() {
    return (
        <div>
            <Menu/>
            <h1>Eventos em elementos desestruturados</h1>
            <MinhasRotas/>
        </div>
    )
}