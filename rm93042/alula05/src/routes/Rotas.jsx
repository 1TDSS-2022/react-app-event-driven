import React from "react";
import {Routes,Route} from 'react-router-dom'
import NovoValor from "../Components/novovalor/NovoValor";


export default function Rotas(){
return(
    <>
      
        <Routes>
            <Route path="/" element={<NovoValor/>}/>
        </Routes>
       
    </>

)

}