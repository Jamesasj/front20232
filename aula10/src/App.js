import logo from './logo.svg';
import './App.css';
import './style/main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ListaPessoa} from './pages/lista.js'
import {Cadastro} from './pages/form.js'
function App() {
  return (
    <BrowserRouter>
      <Routes path="/" >
        <Route index element={<ListaPessoa/>} />
        <Route path='cadastro' element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
