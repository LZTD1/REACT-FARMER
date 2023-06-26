import Header from "../components/Header";
import SortingMethods from "../components/SelectorCategories";
import ProductContainer from "../components/ProductContainer";
import Paginaton from "../components/Pagination";

function MainDisplay() {
    return (
      <div className="wrapper">
        <Header />
        <SortingMethods />
        <h1 className="allProductDescription">Все продукты:</h1>
        <ProductContainer />
        <Paginaton />
      </div>
    );
  }
  
  export default MainDisplay;