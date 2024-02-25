import './App.css';
import Eventos from './componentes/Eventos'
import Form from './componentes/Form';

function App() {
  
  return (
    <div className="App">
      <Eventos numero='1' />
      <Eventos numero='2' />
      <Form />
    </div>
  );
}

export default App;
