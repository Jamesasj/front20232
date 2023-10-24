import logo from './logo.svg';
import './App.css';
import './style/main.css'
function App() {
  return (
    <div className='container'>
      <div className='combo'>
        <label>Nome</label>
        <input type='text' placeholder='nome'></input>
      </div>
      <div className='combo'>
        <label>CPF</label>
        <input  type='text' placeholder='CPF'></input>
      </div>
      <button>Salvar</button>
    </div>
  );
}

export default App;
