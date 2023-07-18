import { Link } from 'react-router-dom';
import ProductInCart from '../../components/Blocks/ProductInCart';

import styles from './Cart.module.scss';

function Cart() {
  return (
    <div className={styles.root}>
      <h1 className="allProductDescription">Ваша корзина:</h1>
      <div className={styles.productsInCart}>
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.textFields}>
          <div>
            Всего заказов: <span>4 шт</span>
          </div>
          <div>
            Сумма сделок: <span className={styles.price}>44000 рублей</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link to="/">
            <button>{'<'} Вернуться</button>
          </Link>
          <button>Завершенные заказы</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
