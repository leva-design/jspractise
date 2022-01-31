"use strict";


// Вся информация которая приходит от пользователя -- будет в виде строк!!!
// Вся информация которая приходит от пользователя -- будет в виде строк!!!
// Вся информация которая приходит от пользователя -- будет в виде строк!!!

const numberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотреных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотреных фильмов?', '');
const d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
