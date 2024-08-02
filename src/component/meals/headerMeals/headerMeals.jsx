import { useParams  } from 'react-router-dom';
import { useContext,Fragment } from 'react';
import { MealContext } from "../../../context/mealsContext";
import ProductCardItem from '../../card/productCarditem/productCardItem';
import './headerMeals.scss'
const HeaderMeals=()=>{
 const {title}=useParams()
 const {mealMap}=useContext(MealContext);
  
  const data =mealMap.filter((items) => items.category === title);
 
return(
    <Fragment>
        <div className='headerMeals-page'>
        <h2 className='products-title'>{title.toUpperCase()}</h2>

        <div className='products-container'>
        { data && data.map((product)=>(
            <ProductCardItem  key={product.id} data={product} />
        ))} 
    </div>
        </div>
    </Fragment>


 )
}
export default HeaderMeals;

