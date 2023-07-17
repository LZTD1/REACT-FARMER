import SortingMethods from '../components/SortingBlock';
import ProductContainer from '../components/ProductContainer';
import Paginaton from '../components/Pagination';

function Home() {
  return (
    <>
      <SortingMethods />
      <h1 className="allProductDescription">Все продукты:</h1>
      <ProductContainer />
      <Paginaton />
    </>
  );
}

export default Home;
