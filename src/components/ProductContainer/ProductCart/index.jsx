import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setStateModalWindow,
  setModalData,
} from '../../../redux/slices/modalWindow';

import styles from './ProductCart.module.scss';

function ProductCart(props) {
  const {
    ratingProduct,
    cropYear,
    sellerCity,
    sellerName,
    name,
    description,
    photo,
    pricePerKG,
    type,
    buyProduct,
  } = props;

  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = React.useState(false);

  const dispatch = useDispatch();

  const handleMouseMove = (e) => {
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
          <img src={photo} alt={name} style={zoomStyle} />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.line}>
            <h3 className={styles.title}>{name}</h3>
            <span className={styles.rating}>⭐ {ratingProduct}/5</span>
            <span className={styles.buyProduct}>🛒 {buyProduct}</span>
          </div>
          <div className={styles.tag}>{sellerName}</div>
          <span className={styles.tag}>{sellerCity}</span>
          <div className={styles.buyDescription}>
            <div className={styles.price}>
              Цена:{' '}
              <span>
                {pricePerKG} ₽/{type}
              </span>
            </div>
            <div
              onClick={() => {
                dispatch(setStateModalWindow(true));
                dispatch(setModalData(props));
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
}
export default ProductCart;
