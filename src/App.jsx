import './App.css';

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
      </header>
    </div>
  );
}

export default App;
