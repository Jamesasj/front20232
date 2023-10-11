console.log('inicio do app');

fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json();
}).then(function (body) {
    body.forEach(element => {
        $('.tableContent').append(
            $('<tr></tr>')
                .append($('<th></th>', { scope: "row", text: element.id }))
                .append($('<td></td>', { text: element.name }))
                .append($('<td></td>', { text: element.email }))
        );
    })
})