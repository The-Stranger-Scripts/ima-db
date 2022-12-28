const viewContainer = document.getElementById('viewContainer');

const queryString = location.href;

function getQueryParams(url) {
    const param = url.slice(url.indexOf('id') + 3);
    return param;
}

let id = getQueryParams(queryString);
let url = `http://localhost:3000/movies`;

if (id) {
    url += `/${id}`;
    fetch(url)
        .catch(err => console.log(err))
        .then(response => response.json())
        .then(data => {
            viewContainer.innerHTML += `
            <div class="card card border-info mb-3 mt-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-5">
                    <img src="${data.logo}"
                        class="img-fluid rounded-start" alt="${data.title}">
                </div>

                <div class="col-md-7">
                    <div class="card-body text-center">
                        <h3 class="card-title text-info m-3">${data.title}</h3>
                        <h6 class="card-text m-3">${data.director}</h6>
                        <p class="card-text m-5">${data.description}</p>
                        <p class="card-text m-3"><small>${data.year} &#183; ${data.duration}m &#183;</small> ${data.rating}/10 <span class="text-warning">&#9733;</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class=" text-center">
            <span>
                <a href="movie_edit.html?id=${data.id}" type="button" class="btn btn-outline-warning mt-4">Edit</a>
                <a href="index.html" type="button" class="btn btn-outline-info mt-4">back</a>
            </span>
        </div>
            `
        })
}
