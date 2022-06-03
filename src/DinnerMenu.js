// Title, Director, Genre, Release year, Rating
// `${this.movie}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`

/**
 * Represents a DinnerMenu
 * @constructor
*/

class MenuItem{
    constructor({name, isVegetarian}){
        this.name = name;
        this.isVegetarian = isVegetarian;
    }
}

export default class DinnerMenu{
    constructor(dishes){
        this.dishes = [];
        for(let dish of dishes){
            this.dishes.push(new MenuItem(dish));
        }
    }


    /**
     * Method to get menu items
     * @param isVegetarian to return vegetarian menu. Defaults to false
     * isVegetarian false returns all menu
     * returns Array<MenuItem> - a list of queried menu item
    */
    getMenu({isVegetarian = false} = {}){
        if(!isVegetarian){
            return this.dishes;
        }
        else{
            return this.dishes.filter((dish) => dish.isVegetarian);
        }
    }
}