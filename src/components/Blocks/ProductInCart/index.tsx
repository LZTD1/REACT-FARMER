import React from 'react';
import styles from './ProductInCart.module.scss';
import { removeItems } from '../../../redux/slices/cart';
import { useAppDispatch } from '../../../redux/store';
import { IItemInCart } from '../../../@types/redux/ICartSlice';

export const ProductInCart: React.FC<IItemInCart> = ({
  seller,
  city,
  name,
  type,
  diliveryProperty,
  photo,
  price,
  orderDate,
}) => {
  const dispatch = useAppDispatch();
  const handleCancelItem = () => {
    dispatch(removeItems(orderDate));
  };

  return (
    <div className={styles.root}>
      <img src={photo} />
      <div className={styles.descriptionProduct}>
        <div className={styles.HeaderBlock}>
          <div className={styles.productName}>{name}</div>
          <div className={styles.productSeller}>{seller}</div>
          <div className={styles.productCity}>{city}</div>
        </div>
        <div className={styles.BodyBlock}>
          <div className={styles.productBlock}>
            <div className={styles.diliveryOnDate}>
              Доставка назначена на:{' '}
              <span>{diliveryProperty.inputDiliveryTime}</span>
            </div>
            <div className={styles.amnount}>
              Количество заказа:{' '}
              <span>
                {diliveryProperty.inputHowMutch} {['Кг', 'Л', 'Шт'][type]}
              </span>
            </div>
            <div className={styles.priceForProduct}>
              Цена: <span>{diliveryProperty.inputHowMutch * price} рублей</span>
            </div>
          </div>
          <div className={styles.ButtonsBlock}>
            <button className={styles.buttonCommunication}>
              Связь с продавцом
            </button>
            <button className={styles.buttonCancel} onClick={handleCancelItem}>
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
