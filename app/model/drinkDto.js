export class DrinkDto {

    constructor(json) {
        this.name = json.strDrink;
        this.id = json.idDrink;
        this.thumbNail = 'http://' + json.strDrinkThumb;
    }

}