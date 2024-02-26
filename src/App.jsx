import './App.css';
import { useState } from 'react';
import SeuNome from './componentes/SeuNome';
import Saudacao from './componentes/Saudacao';

function App() {
  const [nome,setNome] = useState()

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
      
    </div>
  );
}

export default App;
