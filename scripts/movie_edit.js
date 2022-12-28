const titleInput = document.getElementById('titleInput');
const directorInput = document.getElementById('directorInput');
const yearInput = document.getElementById('yearInput');
const durationInput = document.getElementById('durationInput');
const ratingInput = document.getElementById('ratingInput');
const urlInput = document.getElementById('urlInput');
const descriptionInput = document.getElementById('descriptionInput');
const saveBtn = document.getElementById('saveBtn');
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
            titleInput.value = data.title;
            directorInput.value = data.director;
            yearInput.value = data.year;
            durationInput.value = data.duration;
            ratingInput.value = data.rating;
            urlInput.value = data.logo;
            descriptionInput.value = data.description;
        })
}

saveBtn.addEventListener('click', () => {

    if (!titleInput.value ||
        !directorInput.value ||
        !yearInput.value ||
        !durationInput.value ||
        !ratingInput.value ||
        !urlInput.value ||
        !descriptionInput.value) {
        alert('Morate popuniti sva polja');
        return;
    }

    const movie = {
        title: titleInput.value,
        year: yearInput.value,
        duration: durationInput.value,
        rating: ratingInput.value,
        description: descriptionInput.value,
        director: directorInput.value,
        logo: urlInput.value
    }

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    }).then(() => {
        location.href = 'index.html';
    })
}
)