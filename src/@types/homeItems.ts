import { IPizzaItem } from './MainTypes';

export interface homeItemsSlice {
  items: IPizzaItem[];
  status: {
    state: 'pending' | 'fulfilled' | 'rejected';
    meta: string;
  };
}

export interface fetchItems {
    
}