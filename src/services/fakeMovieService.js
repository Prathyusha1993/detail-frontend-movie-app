import * as genresAPI from "./fakeGenreService";

const movies = [
    {
        id: "5b21ca3eeb7f6fbccd471815",
        title: 'Terminator',
        genre: {id: '5b21ca3eeb7f6fbccd471818', name: 'Action'},
        stock: 6,
        rate: 2.5,
        publishDate: '2018-01-03T19:04:28.809Z',
        liked: true
    },
    {
        id: "5b21ca3eeb7f6fbccd471816",
        title: 'Die Hard',
        genre: {id: '5b21ca3eeb7f6fbccd471818', name: 'Action'},
        stock: 5,
        rate: 2.5,
    },
    {
        id: "5b21ca3eeb7f6fbccd471817",
        title: 'Get Out',
        genre: {id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller'},
        stock: 8,
        rate: 3.5,
    },
    {
        id: "5b21ca3eeb7f6fbccd471819",
        title: 'Trip to Italy',
        genre: {id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy'},
        stock: 7,
        rate: 3.5,
    },
    {
        id: "5b21ca3eeb7f6fbccd47181a",
        title: 'Airplane',
        genre: {id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy'},
        stock: 7,
        rate: 3.5,
    },
    {
        id: "5b21ca3eeb7f6fbccd47181b",
        title: 'Wedding Crashers',
        genre: {id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy'},
        stock: 7,
        rate: 3.5,
    },
    {
        id: "5b21ca3eeb7f6fbccd47181e",
        title: 'Gone Girl',
        genre: {id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller'},
        stock: 9,
        rate: 4.5,
    },
    {
        id: "5b21ca3eeb7f6fbccd47181f",
        title: 'Avengers',
        genre: {id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller'},
        stock: 4,
        rate: 4,
    },
    {
        id: "5b21ca3eeb7f6fbccd471821",
        title: 'Joker',
        genre: {id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy'},
        stock: 2,
        rate: 5,
    },
    {
        id: "5b21ca3eeb7f6fbccd471822",
        title: 'Student',
        genre: {id: '5b21ca3eeb7f6fbccd471818', name: 'Action'},
        stock: 2,
        rate: 5,
    },
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m.id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m.id === movie.id) || {};
    movieInDb.title = movie.title;
    movieInDb.genre = genresAPI.genres.find(g => g.id === movie.genreId);
    movieInDb.stock = movie.stock;
    movieInDb.rate = movie.rate;

    if(!movieInDb.id) {
        movieInDb.id = Date.now().toString();
        movies.push(movieInDb);
    }
    return movieInDb;
}