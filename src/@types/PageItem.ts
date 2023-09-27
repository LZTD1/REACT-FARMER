import { IPizzaItem } from './MainTypes';

export interface PageItem {
  item: IPizzaItem | null;
  status: {
    state: 'pending' | 'fulfilled' | 'rejected';
    meta: string;
  };
}
