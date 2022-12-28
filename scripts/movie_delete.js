const queryString = location.href;

function getQueryParams(url) {
    const param = url.slice(url.indexOf('id') + 3);
    return param;
}

let id = getQueryParams(queryString);
let url = `http://localhost:3000/movies`;

if (id) {
    if (confirm('Da li ste sigurni da zelite da obrisete film?')) {
        url += `/${id}`;
        fetch(url, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(movie)
        }).then(() => {
            location.href = 'index.html';
        })
    } else {
        location.href = 'index.html';
    }
}