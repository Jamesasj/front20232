import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const ListaPessoa = () => {
    const [pessoas, setPessoas] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(lista => setPessoas(lista))
    } ,[])

    return (
        <>
            <Link to='cadastro'><button>Novo</button></Link>
            <div>"Lista Pessoas"</div>
            <div>
                {
                    pessoas.map((pessoa) => {
                        return(<div key={pessoa.id}>{pessoa.name}</div>)
                    })
                }
            </div>
        </>)
}

export { ListaPessoa }