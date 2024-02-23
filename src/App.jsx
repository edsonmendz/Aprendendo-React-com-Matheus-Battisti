import './App.css';
import HelloWorld from './componentes/HelloWorld'

function App() {

  const name = 'edson'

  function sum(a,b) {
    return a + b
  }


  return (
    <div className="App">
      <header className="App-header">
        <h2>Alterando JSX</h2>
        <p>Olá, {name}</p>
        <p>soma: {sum( 2, 3)}</p>
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
