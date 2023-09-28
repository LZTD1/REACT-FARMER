import { IPizzaItem } from '../MainTypes';

export interface IPageItem {
  item: IPizzaItem | null;
  status: {
    state: 'pending' | 'fulfilled' | 'rejected';
    meta: string;
  };
}
