const API_KEY = "e12d272556b8d2b10189561c023044e1"

const requests = {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    getTopRated: `/movie/top_rated?api_key=${API_KEY}&langauge=en-US`,
    getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests