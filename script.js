let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
}

for (let i = 0; i < 2; i++) {
    
    let lastSeenMovie = prompt('Один из последних просмотренных фильмов?');
    let lastSeenMovieScore = +prompt('На сколько оцените его?');

    personalMovieDB['movies'][lastSeenMovie] = lastSeenMovieScore;
}

console.log(personalMovieDB);