import React, { cloneElement, useState } from 'react';
import { compileStringAsync } from 'sass';

import testJSON from '../test_data.json';

function ProductContainer() {
  const typeOfProduct = ['Кг', 'Л', 'Шт'];
  // 0 kg 1 litr 2 pieces
  return (
    <div className="productContainer">
      {testJSON.map((value, key) => (
        <ProductCard key={key} {...value} type={typeOfProduct[value.type]} />
      ))}
    </div>
  );
}

function ProductCard({
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
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

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
    transform: isZoomed ? 'scale(1.8)' : 'none',
  };

  return (
    <div className="productContainer__item">
      <div
        className="productContainer__item__photoContaiener"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src={photo} alt={name} style={zoomStyle} />
      </div>
      <div className="productContainer__item__descriptionContainer">
        <div className="productContainer__item__descriptionContainer__line">
          <h3 className="productContainer__item__descriptionContainer__line__title">{name}</h3>
          <span className="productContainer__item__descriptionContainer__line__rating">
            ⭐ {ratingProduct}/5
          </span>
          <span className="productContainer__item__descriptionContainer__line__buyProduct">
            🛒 {buyProduct}
          </span>
        </div>
        <div className="productContainer__item__descriptionContainer__sellerName tag">
          {sellerName}
        </div>
        <span className="productContainer__item__descriptionContainer__line__sellerCity tag">
          {sellerCity}
        </span>
        <div className="productContainer__item__descriptionContainer__buyDescription">
          <div className="productContainer__item__descriptionContainer__buyDescription__price">
            Цена: <span>{pricePerKG} ₽/{type}</span> 
          </div>
          <div className="productContainer__item__descriptionContainer__buyDescription__buttonBuy">
            <span>Заказать</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductContainer;
