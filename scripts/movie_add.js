const titleInput = document.getElementById('titleInput');
const directorInput = document.getElementById('directorInput');
const yearInput = document.getElementById('yearInput');
const durationInput = document.getElementById('durationInput');
const ratingInput = document.getElementById('ratingInput');
const urlInput = document.getElementById('urlInput');
const descriptionInput = document.getElementById('descriptionInput');

const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', () => {
    console.log('radi')
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

    // console.log(movie);

    fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    }).then(() => {
        location.href = 'index.html';
    })
}
)