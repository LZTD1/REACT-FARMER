import { Link } from 'react-router-dom';
import ProductInCart from '../../components/Blocks/ProductInCart';
import EmptyCart from '../../components/Labels/EmptyCart/';

import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cart';

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const [amnount, itemsCount] = useSelector(selectCart);

  return (
    <div className={styles.root}>
      <h1 className="allProductDescription">Ваша корзина:</h1>
      <div className={styles.productsInCart}>
        {items.length > 0 ? (
          items.map((value, key) => (
            <ProductInCart {...value} key={value.orderDate} />
          ))
        ) : (
          <EmptyCart />
        )}
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.textFields}>
          <div>
            Всего заказов: <span>{itemsCount} шт</span>
          </div>
          <div>
            Сумма сделок: <span className={styles.price}>{amnount} рублей</span>
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
