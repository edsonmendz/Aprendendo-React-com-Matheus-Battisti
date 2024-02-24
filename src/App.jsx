import './App.css';
import HelloWorld from './componentes/HelloWorld';
import SayMyName from './componentes/SayMyName';
import Pessoa from './componentes/Pessoa';
import Frase from './componentes/Frase';
import List from './componentes/List';

function App() {

  const name = 'edson'

  function sum(a,b) {
    return a + b
  }


  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
