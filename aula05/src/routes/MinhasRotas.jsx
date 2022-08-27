import React from "react";
import { Routes, Router } from 'react-router-dom';
import NovoValor from "../components/novoValor/NovoValor";

export default function MinhasRotas() {
    return (
        <>

                <Routes>
                    <Router path='/' element={<NovoValor />}/>
                </Routes>

        </>
    )
}
