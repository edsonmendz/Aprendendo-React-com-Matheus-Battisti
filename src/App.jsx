import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./componentes/Navbar";

function App() {  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>          
          <Route path="/" element={<Home />} > </Route>
          <Route path="/empresa" element={<Empresa />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
