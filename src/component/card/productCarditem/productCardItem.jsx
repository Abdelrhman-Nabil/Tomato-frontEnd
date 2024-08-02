import { useContext} from 'react'
import './productCardItem.scss'
import plus1 from '../../../assets/b1.png';
import plus2 from "../../../assets/b3.png"
import minus from '../../../assets/b2.png';
import { CartContext } from '../../../context/cartContext';
const ProductCardItem=({data})=>{
    const {id,name,price,imageUrl,description}=data;
    const {addItemsToCart,removeItemFromCart,cartItems}=useContext(CartContext);
    const product=cartItems.find((item)=>item.id===id)

    const addProductToCart=()=>{addItemsToCart(data)}
    const removeItemCart=()=>{removeItemFromCart(data)}
    return (
      <div className="carditem">
        <div className="carditem-img">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="operations">
          {!product ? (
            <div className='frist'>
              <img
                src={plus1}
                onClick={addProductToCart}
              />
            </div>
          ) : <div className='last'>
          <img
            className='minus'
                src={minus}
                onClick={removeItemCart}

              />
              <span className="count">{product.quantity}</span>
              <img
                className="plus"
                src={plus2}
                onClick={addProductToCart}

              />
          </div>}
        </div>
        <div className="cartitem-details">
          <span className="name">{name}</span>
          <span className="description">{description}</span>
          <span className="price">{price} $</span>
        </div>
      </div>
    );

}
export default ProductCardItem

/*
            <div>
              <img
                src={plus}
                className="plus2"
                onClick={() => {
                  setItemCount((prev) => prev + 1);
                }}
              />
              <span className="count">{itemCount}</span>
              <img
                className="minus"
                src={minus}
                onClick={() => {
                  setItemCount((prev) => prev - 1);
                }}
              />
            </div>
*/