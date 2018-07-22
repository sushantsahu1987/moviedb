const API_KEY = 'XXX';

export function GET_SEARCH_MOVIES(key,page) {
    return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${key}&page=${page}`;
}