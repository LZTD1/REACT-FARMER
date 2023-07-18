import React from 'react';

import styles from './ProductInCart.module.scss';

function ProductInCart() {
  return (
    <div className={styles.root}>
      <img
        src={
          'https://sun9-48.userapi.com/impg/G-s13n1GaQzSJKTpVCcU9MIXy1ukemp0Ltr5ZQ/k3rVnIaxdu0.jpg?size=1280x853&quality=95&sign=2429976c4117a3a03264a12761638efb&c_uniq_tag=M-lM08OIQ9BkljGa9SWHka3CKjZmHhmAnngQW5WJ6Jw&type=album'
        }
      />
      <div className={styles.descriptionProduct}>
        <div className={styles.HeaderBlock}>
          <div className={styles.productName}>Пшеница</div>
          <div className={styles.productSeller}>ИП "Солженицын"</div>
          <div className={styles.productCity}>г. Рязань</div>
        </div>
        <div className={styles.BodyBlock}>
          <div className={styles.productBlock}>
            <div className={styles.diliveryOnDate}>
              Доставка назначена на: <span>11.07.2023</span>
            </div>
            <div className={styles.amnount}>
              Количество заказа: <span>1000 кг</span>
            </div>
            <div className={styles.priceForProduct}>
              Цена: <span>11000 рублей</span>
            </div>
          </div>
          <div className={styles.ButtonsBlock}>
            <button className={styles.buttonCommunication}>Связь с продавцом</button>
            <button className={styles.buttonCancel}>Отменить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
