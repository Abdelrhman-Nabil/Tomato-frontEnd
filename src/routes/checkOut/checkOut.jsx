import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { CartContext } from "../../context/cartContext";
import CheckoutItem from "../../component/checkOutItem/checkOutItem";
import "./checkOut.scss";
import BackDrop from "../../component/others/backDrop/backDrop";
import Button from "../../component/others/button/button";
const CheckOut = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useContext(CartContext);
  const PaymentHandler=()=>{
    navigate('/PaymentForm');


  }
  return (
    <Fragment>
      {showModal && (
        <BackDrop
          onClick={() => {
            setShowModal(false);
          }}
        />
      )}

      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block f1">
            <span>Product</span>
          </div>
          <div className="header-block f2">
            <span>Title</span>
          </div>
          <div className="header-block f3">
            <span>Quantity</span>
          </div>
          <div className="header-block f4">
            <span>Price</span>
          </div>
          <div className="header-block f5">
            <span>Remove</span>
          </div>
        </div>
          {cartItems.length ? (
            cartItems.map((cartItem) => {
              return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
            })
          ) : (
            <div className="emptyCheckOut">
              <h1>No items in cart</h1>
            </div>
          )}
        </div>
        <div className="cartTotal">
        <h2>Cart Total</h2>
        <div className="element top">
          <span>SubTotal</span>
          <span>${cartTotal}</span>
        </div>
        <div className="element ">
          <span>Delivery Fee</span>
          <span>$5</span>
        </div>
        <div className="element top">
          <span className="total1">Total</span>
          <span>${cartTotal + 5}</span>
        </div>
        <Button
          className=" button-container checkOut-button"
          buttonType="inverted"
          disabled={cartItems.length === 0}
          onClick={PaymentHandler}
        >
          Proceed To CheckOut
          </Button>
      </div>

    </Fragment>
  );
};
export default CheckOut;

/*
      <Button  className=" button-container checkOut-button" buttonType="inverted" disabled={cartItems.length===0}>Payment For order</Button>

{cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
*/