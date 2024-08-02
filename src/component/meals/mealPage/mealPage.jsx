import { Fragment, useContext } from 'react'
import MealPreview from '../mealPreview/mealPreview'
import { MealContext } from '../../../context/mealsContext'
import './mealPage.scss'
const MealPage=()=>{
    const {mealMap}=useContext(MealContext);

        let categories = [];
        const  category=mealMap.map((item=>item.category))
        category.forEach(element => {
                if (!categories.includes(element)) {
                    categories.push(element);
                }
            });
          console.log(categories)
    return(
        <Fragment>
            <MealPreview  categories={categories} products={mealMap} />
        </Fragment>
    )
}
export default MealPage
/*
/ {Object.keys(mealMap).map((title)=>{
        //     const products=mealMap[title];
            // return(
            //    <MealPreview  title={products.title} products={products.items}/>
            // )
        // })}
*/