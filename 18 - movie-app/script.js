const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

//获取数据
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = movies.map(movie => {
        //解构赋值
        const { title, poster_path, vote_average, overview } = movie
        return `
            <div class="movie">
                <img src="${IMG_PATH+poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${spanClass(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>OVERVIEW</h3>
                    ${overview}
                </div>
            </div>
        `
    }).join('')
}

function spanClass(average) {
    if (average>=8) {
        return 'green'
    } else if (average>=5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API+searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})