import { IPizzaItem } from '../MainTypes';

export interface IItemInCart {
  diliveryProperty: IDiliveryProperty;
  orderDate: number;

  rating: IPizzaItem['rating'];
  seller: IPizzaItem['seller'];
  city: IPizzaItem['city'];
  name: IPizzaItem['name'];
  photo: IPizzaItem['photo'];
  price: IPizzaItem['price'];
  purchases: IPizzaItem['purchases'];
  type: IPizzaItem['type'];
  id: IPizzaItem['id'];
}
export interface ICartSlice {
  amnount: number;
  items: IItemInCart[];
}
export interface IDiliveryProperty {
  inputDiliveryAddress: string;
  inputHowMutch: number;
  inputDiliveryTime: string;
}
