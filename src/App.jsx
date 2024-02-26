import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";

function App() {
  const [nome,setNome] = useState()

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/empresa'>Empresa</Link>
          </li>
          <li>
            <Link to='/contato'>Contato</Link>
          </li>
        </ul>
      </Router>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/empresa">
          <Empresa></Empresa>
        </Route>
        <Route path="/">
          <Contato></Contato>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
