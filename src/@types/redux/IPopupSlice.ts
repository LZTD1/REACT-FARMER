export type IPopupSliceData = {
  name_ru: string;
  name_eng: 'ratingProduct' | 'pricePerKG';
  orderBy: 'desc' | 'asc';
};
export interface IPopupSlice {
  sort: IPopupSliceData;
}
