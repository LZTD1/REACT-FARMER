export interface IPizzaItem {
  id: string;
  price: number;
  city: string;
  rating: number;
  name: string;
  type: number;
  purchases: number;
  seller: string;
  photo: string;
  category: number;
  description: string;
  comments: IComment[];
}
export interface IComment {
  name: string;
  rating: number;
  comment: string;
}
