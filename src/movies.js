

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map( onlyDirectors => onlyDirectors.director);
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArray = moviesArray.filter ( boh => boh.director === "Steven Spielberg" && boh.genre.includes("Drama"));
    return newArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray === []){
        return 0
    } else {
    // como entro em cada index do Array [i++]? posso fazer com For each?
    const totalRates = moviesArray.reduce(function (acc, rate){
        return acc + rate.score;
    }, 0);
    const avarageRate = totalRates / moviesArray.length ;
    return Math.round((avarageRate * 100))/100;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter ( boh => boh.genre.includes("Drama"));
    return {
        genre: boh.genre,
        score: boh.score,
    };
    const dramaRates = dramaMovies.reduce(function (sum, rate){
        return sum + rate.score;
    }, 0);
    // const totalRates = dramaMovies.reduce(function (acc, rate){
    //     return acc + rate.score;
    // }, 0);
    // const avarageRate = totalRates / dramaMovies.length ;
    // return Math.round((avarageRate * 100))/100;
}

// use for i ?????

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = moviesArray;
    const sortMovies = newArray.year.sort(function (a , b){
        return b - a ;
    });
    // .year???
    // const sortMovies = newArray.sort((a , b) => b - a )
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = moviesArray;
    for (i=0; i<20; i++){
        const newArray = moviesArray.map( onlyTitle => onlyTitle.title);
        return newArray.sort()
    }
    return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
