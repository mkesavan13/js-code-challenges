// Title, Director, Genre, Release year, Rating
// `${this.movie}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`

/**
 * Represents a movie
 * @constructor
*/
export default class Movie{
    constructor({title, director, genre, releaseYear, rating}){
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }


    /**
     * Method to get movie overview
     * returns string - a sentence overview of the movie
    */
    getOverview(){
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }
}