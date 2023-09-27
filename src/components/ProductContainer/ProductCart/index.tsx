import React from 'react';
import { useDispatch } from 'react-redux';
import { setStateAndDataModalWindow } from '../../../redux/slices/modalWindow';

import styles from './ProductCart.module.scss';
import { Link } from 'react-router-dom';

interface IProductCart {
  rating: number;
  seller: string;
  city: string;
  name: string;
  photo: string;
  price: number;
  purchases: number;
  type: number;
  id: string;
}

const ProductCart: React.FC<IProductCart> = (props) => {
  const { rating, seller, city, name, photo, price, purchases, type, id } =
    props;
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = React.useState(false);

  const dispatch = useDispatch();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const zoomStyle = {
    transformOrigin: `${position.x}px ${position.y}px`,
    transform: isZoomed ? 'scale(1.7)' : 'none',
  };

  return (
    <>
      <div className={styles.root}>
        <div
          className={styles.photoContaiener}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={`/item/${id}`}>
            <img src={photo} alt={name} style={zoomStyle} />
          </Link>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.line}>
            <h3 className={styles.title}>{name}</h3>
            <span className={styles.rating}>⭐ {rating}/5</span>
            <span className={styles.buyProduct}>🛒 {purchases}</span>
          </div>
          <div className={styles.tag}>{seller}</div>
          <span className={styles.tag}>{city}</span>
          <div className={styles.buyDescription}>
            <div className={styles.price}>
              Цена:{' '}
              <span>
                {price} ₽/{['Кг', 'Л', 'Шт'][type]}
              </span>
            </div>
            <div
              onClick={() => {
                dispatch(
                  setStateAndDataModalWindow({
                    active: true,
                    modalData: props,
                  })
                );
              }}
              className={styles.buttonBuy}
            >
              <span>Заказать</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCart;
