import {useParams} from 'react-router-dom';
import {Fragment, useEffect, useState } from 'react';
import ProductCardItem from '../../card/productCarditem/productCardItem';
import { useHttpClinet } from '../../../utils/hooks/httpHook';
import LoadingSpinner from '../../others/loadingSpinner/loadingSpinner';
import ErrorModal from '../../others/models/error/errorModel';
import BackDrop from '../../others/backDrop/backDrop';
import './headerMeals.scss'
const HeaderMeals=()=>{
    const {title}=useParams()
    const [loadedProduct, setLoadedProduct] = useState();
    const { error, isLoading, clearError, sendRequest } = useHttpClinet();


useEffect(() => {
  
  const fetchUsers = async () => {
    try {
      const responseDataProduct = await sendRequest(
        process.env.REACT_APP_BACKEND_URL+"/api/products/allProduct"
      );

      if (responseDataProduct) {
        setLoadedProduct(responseDataProduct.products);
      }

    } catch (err) {}
  };
  fetchUsers();

}, [sendRequest]);
let data;
if(loadedProduct)
  { data =loadedProduct.filter((items) => items.category === title);
  }
  console.log(data)
return(
    <Fragment>

    {isLoading && <LoadingSpinner asOverlay />}

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
/**
 * 
 *        18 { data && data.map((product)=>(
            <ProductCardItem  key={product.id} data={product} />
        ))} 
 */
