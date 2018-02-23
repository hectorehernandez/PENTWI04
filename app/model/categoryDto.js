export class CategoryDto {

    constructor(json) {
        this.id = '_' + Math.random().toString(36).substr(2, 9);
        this.name = json.strCategory;
    }
}