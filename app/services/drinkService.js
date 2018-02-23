import { fromPromise, empty } from 'rxjs/observable/fromPromise';
import { map, catchError } from 'rxjs/operators';
import { CategoryDto } from '../model/categoryDto';
import { DrinkDto } from '../model/drinkDto';

const API_URL = 'http://www.thecocktaildb.com/api/json/v1/1/';

export default class DrinkService {
    getCategories(){
        return fromPromise(fetch(`${API_URL}list.php?c=list`)
            .then(res => res.json()))
            .pipe(map(res => res.drinks.map(data => new CategoryDto(data))),
                catchError(err => {
                    console.error(err);
                    return empty();
                }));
    }

    getDrinksByCategory(category){
        return fromPromise(fetch(`${API_URL}filter.php?c=${category}`)
        .then(res => res.json()))
        .pipe(map(res => res.drinks.map(data => new DrinkDto(data))),
            catchError(err => {
                console.error(err);
                return empty();
            })
        );
    }    
}