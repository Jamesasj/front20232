let contador = 0;
// recupera a variavel lista pessoas do localstorage
const listaPessoas = JSON.parse(localStorage.getItem('listaPessoas'));

const removeLine = (evt) => {
    const btn = evt.target;
    const linha = btn.parentElement.parentElement;
    const idx = linha.children[0].innerHTML;
    console.log(idx)
    linha.remove()
}

const createNewLine = (nome, cpf) =>{
    const nline = document.createElement('tr') ;
    const ncell4 = document.createElement('td');
    ncell4.innerText = contador;
    nline.appendChild(ncell4) ;
    const ncell1 = document.createElement('td');
    ncell1.innerText = nome;
    nline.appendChild(ncell1) ;
    const ncell2 = document.createElement('td');
    ncell2.innerText = cpf 
    nline.appendChild(ncell2) ;
    const ncell3 = document.createElement('td')
    // ncell3.innerHTML = `<button>remove</button>`;
    // const bntRemove = ncell3.querySelector('button');
    const bntRemove = document.createElement('button')
    bntRemove.innerHTML = 'remover';
    bntRemove.onclick = removeLine;
    ncell3.appendChild(bntRemove)
    nline.appendChild(ncell3) ;
    contador++;
    return nline;
}

function aoIncluir(evt){
    const objnome = document.querySelector('#nome input');
    const objCPF = document.querySelector('#cpf input');
    const objTableBody = document.querySelector('.tabela tbody');
    const objPessoa = { /// cria obj pessoa
        nome : objnome.value,
        cpf : objCPF.value
    };

    listaPessoas.push(objPessoa) /// add pessoa a lista
    const  strLista = JSON.stringify(listaPessoas) // transforma lista em str
    localStorage.setItem('listaPessoas', strLista) /// salva a lista no localstorage
    objTableBody.appendChild(createNewLine(objnome.value,objCPF.value ));
}

console.log('carregou!!!!')
const btnInsert = document.querySelector('div.navbar button.btnInsert');
console.log(btnInsert)
btnInsert.onclick = aoIncluir;

/// pega cada elemento da lista e inclui no html
listaPessoas.forEach(item => {
    const objTableBody = document.querySelector('.tabela tbody');
    objTableBody.appendChild(createNewLine(item.nome, item.cpf));
});
