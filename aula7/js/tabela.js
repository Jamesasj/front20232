const removeLine = (evt) => {
    const btn = evt.target;
    const linha = btn.parentElement.parentElement;
    const idx = linha.children[0].innerHTML;
    const idxElem = tabelaPessoas.lista.findIndex( pessoa => pessoa.id == idx);
    tabelaPessoas.lista.splice(idxElem,1);
    localStorage.setItem('tabelaPessoas', JSON.stringify(tabelaPessoas)) /// salva a lista no localstorage
    linha.remove()
}

const createNewLine = (nome, cpf, id) => {
    const nline = document.createElement('tr');
    const ncell4 = document.createElement('td');
    ncell4.innerText = id;
    nline.appendChild(ncell4);
    const ncell1 = document.createElement('td');
    ncell1.innerText = nome;
    nline.appendChild(ncell1);
    const ncell2 = document.createElement('td');
    ncell2.innerText = cpf
    nline.appendChild(ncell2);
    const ncell3 = document.createElement('td')
    // ncell3.innerHTML = `<button>remove</button>`;
    // const bntRemove = ncell3.querySelector('button');
    const bntRemove = document.createElement('button')
    bntRemove.innerHTML = 'remover';
    bntRemove.onclick = removeLine;
    ncell3.appendChild(bntRemove);

    const btnEditar = document.createElement('button')
    btnEditar.innerHTML = 'editar';
    btnEditar.onclick = removeLine;
    ncell3.appendChild(btnEditar)

    nline.appendChild(ncell3);

    return nline;
}

const aoIncluir = (evt) = > {
    const objnome = document.querySelector('#nome input');
    const objCPF = document.querySelector('#cpf input');
    const objTableBody = document.querySelector('.tabela tbody');
    const objPessoa = createPessoa(objnome.value, objCPF.value, tabelaPessoas.contador)
    tabelaPessoas.contador++;
    //listaPessoas.push(objPessoa) /// add pessoa a lista
    tabelaPessoas.lista.push(objPessoa)

    localStorage.setItem('tabelaPessoas', JSON.stringify(tabelaPessoas)) /// salva a lista no localstorage
    objTableBody.appendChild(createNewLine(objPessoa.nome, objPessoa.cpf, objPessoa.id));
}


export default { aoIncluir, createNewLine, removeLine}