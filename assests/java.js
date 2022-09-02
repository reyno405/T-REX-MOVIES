const API_KEY = 'api_key=96db98bb71a271cc952cb07d8c7a019f';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

getMovies(API_URL);

function getMovies(url) {
    
    fetch(url).then(res => res.json()).then(data => {
        
        showMovies(data.results);
    }) 

}

function showMovies(data) {

    data.forEach(mpvie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <div class="movie">
            <img src="" alt="Image" >

            <div class="movie-info">
                <h3>Movie Title</h3>
                <span class="green">9.8</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eligendi ipsa temporibus rem possimus ea mollitia? Voluptatem non ad odio.
            </div>
        `
    })
}