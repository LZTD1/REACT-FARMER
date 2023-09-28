import { IPizzaItem } from '../MainTypes';

export interface IModalWindowSlice {
  active: boolean;
  modalData: {
    id: IPizzaItem['id'] | null;
    rating: IPizzaItem['rating'] | null;
    seller: IPizzaItem['seller'] | null;
    city: IPizzaItem['city'] | null;
    name: IPizzaItem['name'] | null;
    photo: IPizzaItem['photo'] | null;
    price: IPizzaItem['price'] | null;
    purchases: IPizzaItem['purchases'] | null;
    type: IPizzaItem['type'] | null;
  };
}
