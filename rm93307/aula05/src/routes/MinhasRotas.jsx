import React from "react";
import { Routes, Route } from 'react-router-dom'
import NovoValor from '../components/novoValor/NovoValor'

export default function MinhasRoutas(){
    return(
        <>
            <Routes>
                <Route path='/' element={<NovoValor/>} />
            </Routes>
        </>
    )
}