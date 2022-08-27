import React from "react";
import {Routes, Route} from 'react-router-dom'
import NovoValor from "../components/NovoValor/NovoValor";

const MainRoutes = () => {

    return(
        <>
                <Routes>
                    <Route path="/" element={<NovoValor/>}/>
                </Routes>
        </>
    )

}

export default MainRoutes;