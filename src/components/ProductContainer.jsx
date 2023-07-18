import React from 'react';
import ProductBlock from './Blocks/Product';
import Skeleton from './Blocks/Product/skeleton';

function ProductContainer() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://649d52b89bac4a8e669d91e8.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, []);

  const typeOfProduct = ['Кг', 'Л', 'Шт'];
  // 0 kg 1 litr 2 pieces

  return (
    <div className="productContainer">
      {isLoading
        ? [...new Array(8)].map((_, index) => (
            <Skeleton className="productContainer__item loader" key={index} />
          ))
        : items.map((value, key) => (
            <ProductBlock key={key} {...value} type={typeOfProduct[value.type]} />
          ))}
    </div>
  );
}
export default ProductContainer;
