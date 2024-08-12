import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCardItem from "../../card/productCarditem/productCardItem";
import "./mealPreview.scss";
const MealPreview = ({ categories, products }) => {
  return (
    <div className="meal-preview-container">
      {categories.map((item) => (
        <div>
          <h2>
            <Link className="title" to={item} >
              {item.toUpperCase()}
            </Link>
          </h2>
         <div className="preview">
         {products
          .filter((element) => element.category === item)
          .filter((_, idx) => idx < 4)
          .map((meal) => (
            <ProductCardItem key={meal.id} data={meal} />
          ))}
         </div>
        </div>
      ))}
    </div>
  );
};
export default MealPreview;

/*
  {mealMap.map((item)=>{
    const title=item.category
    const products=mealMap.filter((i=>i.category ===title))
    console.log(title)
    console.log(products)
*/
/*
// return(
        // <div className='meal-preview-container'>
//           <h2><Link className='title' to={title}>{title}</Link></h2>
//           <div className='preview'>
          {products.filter((_,idx)=>idx < 4)
          .map((meal)=>(
            <ProductCardItem key={meal.id} data={meal} />
          ))
          }
  
//           </div>
//         </div>
//       )
    
            </div>
*/
