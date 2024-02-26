<<<<<<< HEAD
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./componentes/Navbar";
=======
import './App.css';
import { useState } from 'react';
import SeuNome from './componentes/SeuNome';
import Saudacao from './componentes/Saudacao';
>>>>>>> parent of d7e88cf (atualizando?)

function App() {  

  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      <Router>
        <Navbar />
        <Routes>          
          <Route path="/" element={<Home />} > </Route>
          <Route path="/empresa" element={<Empresa />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </Router>
=======
=======
      <h1>Renderização Condicional</h1>
>>>>>>> parent of dc78519 (state lift)
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
>>>>>>> parent of d7e88cf (atualizando?)
      
    </div>
  );
}

export default App;
