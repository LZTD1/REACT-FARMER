import { IPizzaItem } from './MainTypes';

export interface itemInSearch {
  type: IPizzaItem['type'];
  price: IPizzaItem['price'];
  photo: IPizzaItem['photo'];
  name: IPizzaItem['name'];
  seller: IPizzaItem['seller'];
  city: IPizzaItem['city'];
  id: IPizzaItem['id'];
}

export interface SearchItems {
  items: itemInSearch[];
  status: {
    state: 'pending' | 'fulfilled' | 'rejected';
    meta: string;
  };
}
