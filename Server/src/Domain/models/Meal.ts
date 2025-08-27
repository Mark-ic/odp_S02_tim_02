export class Meal{
    public constructor(
        public idMeal : number = 0,
        public mealName : string = '',
        public price:number = 0,
        public image: string = '',
        public prepTime: number = 0,
        public numberOfOrders: number = 0
    ){}
}