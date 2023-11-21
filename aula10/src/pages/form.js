import { useState } from 'react';
import { Link } from "react-router-dom";

function Cadastro() {
    const [pessoa, setPessoa] = useState({ nome: 'Alex', cpf: 123 });
    const [msg, setMsg] = useState('')
    const minhaFuncao = x => {
      setMsg('usuario incluido com sucesso!')
      let pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
      pessoas.push(pessoa);
      localStorage.setItem('pessoas', JSON.stringify(pessoas))
    }
    return (
        <div className='container'>
            <div className='toast'>
                <div>{msg}</div>
            </div>
            <div className='combo'>
                <label>Nome</label>
                <input type='text' id='nome'
                    placeholder='nome'
                    value={pessoa.nome}
                    onChange={({ target }) => {
                        console.log(target.value)
                        setPessoa({
                            ...pessoa,
                            nome: target.value
                        });
                    }}></input>
            </div>
            <div className='combo'>
                <label>CPF</label>
                <input type='number' placeholder='CPF'
                    value={pessoa.cpf}
                    onChange={({ target }) => {
                        setPessoa({ ...pessoa, cpf: target.value })
                    }}></input>
            </div>
            <div className='combo'>
                <h1>{pessoa.nome}</h1>
            </div>
        <Link to='/' ><button onClick={minhaFuncao}>Salvar</button></Link>
        </div>
    )
}
export {Cadastro}