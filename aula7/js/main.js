console.log('inicio do app');

fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json();
}).then(function (body) {
    const table = document.querySelector(".table");
    body.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `${element.id} - ${element.name} - ${element.email}`
        table.appendChild(div)
    });
})

console.log('aqui esta fora da promisses')


console.log('inicio  promisses await')
const execawiat = await fetch('https://jsonplaceholder.typicode.com/users');
console.log('meio  promisses await')
const novoObj = await execawiat.json();
console.log('fim  promisses await')
console.table(novoObj)