import './App.css';
import { useState } from 'react';
import SeuNome from './componentes/SeuNome';
import Saudacao from './componentes/Saudacao';

function App() {
  const [nome,setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
      
    </div>
  );
}

export default App;
