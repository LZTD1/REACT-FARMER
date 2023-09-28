import { IPizzaItem } from '../MainTypes';

export interface IItemInSearch {
  type: IPizzaItem['type'];
  price: IPizzaItem['price'];
  photo: IPizzaItem['photo'];
  name: IPizzaItem['name'];
  seller: IPizzaItem['seller'];
  city: IPizzaItem['city'];
  id: IPizzaItem['id'];
}

export interface ISearchItems {
  items: IItemInSearch[];
  status: {
    state: 'pending' | 'fulfilled' | 'rejected';
    meta: string;
  };
}
