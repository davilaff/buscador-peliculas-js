document.getElementById('searchButton').addEventListener('click', movieSearch);


function movieSearch(){
    const results = document.getElementById('results');
    results.innerHTML = 'Cargando';
    const searchInput = document.getElementById('searchInput').value;
    const apiKey = '060bc86baa48db01ab3b8c743bb82bbe';
    const baseUrl = 'https://api.themoviedb.org/3/search/movie?query=';
fetch(`${baseUrl}${searchInput}&api_key=${apiKey}`)
.then(response => response.json())
.then(response => displayMovies(response.results))
}

function displayMovies(movies){
results.innerHTML = '';
if(movies.length === 0){results.innerHTML = '<p>No se encontraron resultados</p>';
return};
movies.forEach(movie => {
    const urlImg = 'https://image.tmdb.org/t/p/w500'
    
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');

    const title = document.createElement('h2');
    title.textContent = movie.title;

    const releaseDate = document.createElement('p');
    releaseDate.textContent = 'Fecha de lanzamiento:' + movie.release_date;

    const overview = document.createElement('p');
    overview.textContent = movie.overview;

    const posterPath = urlImg + movie.poster_path;
    const poster = document.createElement('img');
    poster.src = posterPath;

    movieDiv.appendChild(poster);
    movieDiv.appendChild(title);
    movieDiv.appendChild(releaseDate);
    movieDiv.appendChild(overview);

    results.appendChild(movieDiv);
});
}