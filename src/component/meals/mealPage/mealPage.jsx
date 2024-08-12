import { Fragment, useContext, useEffect, useState } from 'react'
import MealPreview from '../mealPreview/mealPreview'
import { MealContext } from '../../../context/mealsContext'
import './mealPage.scss'
import { useHttpClinet } from '../../../utils/hooks/httpHook'
const MealPage=()=>{
    const [loadedProduct, setLoadedProduct] = useState();

    const { error, isLoading, clearError, sendRequest } = useHttpClinet();
    
    
    useEffect(() => {
      
      const fetchUsers = async () => {
        try {
          const responseDataProduct = await sendRequest(
            "http://localhost:5000/api/products/allProduct"
          );
    
          if (responseDataProduct) {
            setLoadedProduct(responseDataProduct.products);
          }
    
        } catch (err) {}
      };
      fetchUsers();
    
    }, [sendRequest]);
        let categories = [];
        let category
        if(loadedProduct){
        category=loadedProduct.map((item=>item.category))
        }
        category&&category.forEach(element => {
                if (!categories.includes(element)) {
                    categories.push(element);
                }
            });
    return(
        <Fragment>
            <MealPreview  categories={categories} products={loadedProduct} />
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