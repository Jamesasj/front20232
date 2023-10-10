import tabelaHTML from "./tabelaHTML.js";
import tabelaPessoas from "./tabelaPessoas.js";

let listaPessoas = tabelaPessoas.listAll(); 

listaPessoas.forEach(pessoa => {
    tabelaHTML.appendItem(pessoa);
});

const btnInsert = document.querySelector('div.navbar button.btnInsert');
btnInsert.onclick = () =>{
    const objnome = document.querySelector('#nome input');
    const objCPF = document.querySelector('#cpf input');
    const pessoa = tabelaPessoas.appendItem(objnome.value, objCPF.value);
    tabelaHTML.appendItem(pessoa);
}


/*
if (!tabelaPessoas) {
    tabelaPessoas = { contador: 0, lista: [] };
    localStorage.setItem('tabelaPessoas', JSON.stringify(tabelaPessoas))
}




console.log('carregou!!!!')
const btnInsert = document.querySelector('div.navbar button.btnInsert');
console.log(btnInsert)
btnInsert.onclick = aoIncluir;


tabelaPessoas.lista.forEach(item => {
    const objTableBody = document.querySelector('.tabela tbody');
    objTableBody.appendChild(createNewLine(item.nome, item.cpf, item.id));
});
*/
/// pega cada elemento da lista e inclui no html

