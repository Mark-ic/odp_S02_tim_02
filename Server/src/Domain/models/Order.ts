import { DeliveryType } from "../enums/orders/DeliveryTypeEnum";
import { OrderStatus } from "../enums/orders/orderStatusEnum";

export class Order{
    public constructor(
        public idOrder: number=0,
        public timeLeft: number=0,
        public status:OrderStatus = OrderStatus.PPREPARING ,
        public deliveryMethod:DeliveryType = DeliveryType.DELIVERY,
        public adress: string = '',
        public idMeal : number = 0,
        public idUser: number = 0
    ){}
}