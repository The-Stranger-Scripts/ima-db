let mainContainer = document.getElementById('mainContainer');

console.log(mainContainer);

fetch('http://localhost:3000/movies')
  .then(res => res.json())
  .then(movies => {
    movies.forEach(movie => {
      mainContainer.innerHTML += `
				<div class="col">
						<div class="card border-dark h-100">                   
								<img src="${movie.logo}" class="card-img-top" alt="${movie.title} poster">
								<div class="card-img-overlay justify-content-end">
									<small class="card-text text-warning">&#9733; ${movie.rating}</small>
								</div>
								<div class="card-body">
										<h5 class="d-inline card-title text-light-emphasis">${movie.title} </h5>
										<p class="text-secondary">${movie.year}</p>
								</div>
						</div>
				</div>
		`;
    });
  });

// <div class="card-footer">
//
//     <p class="card-text text-warning">&#9733; ${movie.rating}</p>
// </div>

// 
