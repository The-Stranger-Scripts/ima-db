let mainContainer = document.getElementById('mainContainer');

console.log(mainContainer)

fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(movies => {
        movies.forEach(movie => {
            mainContainer.innerHTML += `
                <div class="col">
                    <div class="card border-dark h-100">
                        <div class="card-header">
                            <h5 class="card-title text-info text-center">${movie.title}</h5>
                        </div>
                        <div class="card-body">
                            <img src="${movie.logo}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-footer">
                            <span class="text-secondary-emphasis">${movie.year}</span>
                            <p class="card-text text-warning">&#9733; ${movie.rating}</p>
                        </div>
                    </div>
                </div>
            `
        });
    })