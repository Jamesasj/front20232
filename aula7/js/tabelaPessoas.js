function listAll(){
    const tabela = JSON.parse(localStorage.getItem('tabelaPessoas'));
    return tabela.lista;
}

const createPessoa = (nome, cpf, id) => {
    return { nome, cpf, id }
}

function  appendItem(nome, cpf){
    const tabela = JSON.parse(localStorage.getItem('tabelaPessoas'));
    const objPessoa = createPessoa(nome, cpf, tabela.contador);
    tabela.contador++;
    tabela.lista.push(objPessoa);
    localStorage.setItem('tabelaPessoas', JSON.stringify(tabela));
    return objPessoa;
}

export default {listAll, appendItem}
