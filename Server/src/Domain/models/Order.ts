export class Order{
    public constructor(
        public idOrder: number=0,
        public timeLeft: number=0,
        public status:string ='',
        public deliveryMethod: string = '',
        public adress: string = '',
        public idMeal : number = 0,
         public idUser: number = 0
    ){}
}