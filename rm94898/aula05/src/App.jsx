import React from 'react';
import Menu from './components/Menu/Menu';
import NovoValor from './components/NovoValor/NovoValor';
import MainRoutes from './Router/MainRoutes';


const App = () =>  {
  return(
    <>
      <Menu/>
      <h1>ESTUDOS SOBRE EVENTOS EM ELEMENTOS DESESTRUTURADOS</h1>
      <MainRoutes/>

  
    </>
  );
}

export default App;