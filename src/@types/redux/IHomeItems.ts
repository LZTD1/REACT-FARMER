import { IPizzaItem } from '../MainTypes';

export interface IHomeItemsSlice {
  items: IPizzaItem[];
  status: {
    state: 'pending' | 'fulfilled' | 'rejected';
    meta: string;
  };
}
