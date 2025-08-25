export class Ingredient {
    public constructor(
        public idIngredient: number = 0,
        public ingredientName: string = '',
        public alergen: boolean = false
    ) { }
}