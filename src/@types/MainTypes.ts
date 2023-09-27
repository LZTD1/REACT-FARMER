export type ITypesProduct = 0 | 1 | 2; // 0-kg,  1-litr, 2-pieces

export interface IPizzaItem {
  id: string;
  price: number;
  city: string;
  rating: number;
  name: string;
  type: ITypesProduct;
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

export interface ICategorySlice {
  categoryId: ITypesProduct;
}
export type IPopupSliceData = {
  name_ru: string;
  name_eng: 'ratingProduct' | 'pricePerKG';
  orderBy: 'desc' | 'asc';
};
export interface IPopupSlice {
  sort: IPopupSliceData;
}

export interface diliveryProperty {
  inputDiliveryAddress: string;
  inputHowMutch: number;
  inputDiliveryTime: string;
}

export interface IItemInCart {
  diliveryProperty: diliveryProperty;
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
