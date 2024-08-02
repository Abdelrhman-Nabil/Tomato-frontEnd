import { useState, useEffect, useContext,Fragment } from "react";
import { MealContext } from "../../context/mealsContext";
import ProductCardItem from "../../component/card/productCarditem/productCardItem";
import "./searchPage.scss";
const SearchPage = () => {
    const {mealMap}=useContext(MealContext)
    console.log(mealMap)
  const [searchField, setSearchField] = useState("");
  const [filterProducts, setFilterProducts] = useState();




   useEffect(() => {
    if(filterProducts){
    const NewfilterProduct = filterProducts.filter((product) => {
      return product.title.toLocaleLowerCase().includes(searchField);
    });
    setFilterProducts(NewfilterProduct);
  }
  }, [searchField, filterProducts])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <Fragment>        
    <div className="search-page">
      <div className="input-field">
        <input
          type="text"
          className="search-box"
          onChange={onSearchChange}
          placeholder="Search For Products "
        />
      </div>
        <div className="View-filterProducts">
        { filterProducts &&filterProducts.map((product) => {
          return (<ProductCardItem key={product.id} product={product} />);
        })}
        
      </div> 
    </div>
    </Fragment>

  );
};
export default SearchPage;
