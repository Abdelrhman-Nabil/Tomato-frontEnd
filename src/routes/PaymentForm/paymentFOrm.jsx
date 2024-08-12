import { Fragment, useContext } from "react";
import {VALIDATOR_EMAIL,VALIDATOR_MINLENGTH,} from "../../utils/validators/validators";
import { useForm } from "../../utils/hooks/useForm";
import { useHttpClinet } from "../../utils/hooks/httpHook";
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/authContext";
import Input from "../../component/others/input/input";
import PayButton from "../../component/others/PayButton/payBotton";
import Button from "../../component/others/button/button";
import "./paymentForm.scss";
import ErrorModal from "../../component/others/models/error/errorModel";
import BackDrop from "../../component/others/backDrop/backDrop";
const PaymentForm = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const {userId,token}=useContext(AuthContext)
  const {sendRequest,error,clearError}=useHttpClinet()
  const [formState, inputHandler] = useForm(
    {
      fullName: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      phoneNumber: {
        value: "",
        isValid: false,
      },
    },
    false
  );

     const paySubmitHandler =async(event) => {
      event.preventDefault();
      try{
        await sendRequest('http://localhost:5000/api/order',"POST",JSON.stringify({
          fullName:formState.inputs.fullName.value,
          email:formState.inputs.email.value,
          address:formState.inputs.address.value,
          phoneNumber:formState.inputs.phoneNumber.value,
          total:cartTotal,
          products:cartItems,
          creator:userId,
        }),{
          'Content-Type':"application/json",
          authorization:'Bearer '+ token
  
        })
       }
     catch(err){}
    };
  return (
    <Fragment>
    {error && <BackDrop />}
    {error && <ErrorModal data={error} onClick={clearError} />}   
    <div className="pamentForm">
    <div className="delevery-Information">
      <h2>Delevery-Information</h2>
      <form className="paymentForm" onSubmit={paySubmitHandler}>
          <Input
            id="fullName"
            placeholder="FullName"
            type="text"
            element="input"
            onInput={inputHandler}
            errorText="Please enter a FullName."
            validators={[VALIDATOR_MINLENGTH(10)]}
          />
          <Input
            id="email"
            placeholder="Email"
            type="text"
            element="input"
            onInput={inputHandler}
            errorText="Please enter a Valid Email."
            validators={[VALIDATOR_EMAIL()]}
          />
          <Input
            id="address"
            placeholder="Address"
            type="text"
            element="input"
            onInput={inputHandler}
            errorText="Please enter a more than 10 Chrachters."
            validators={[VALIDATOR_MINLENGTH(10)]}
          />
          <Input
            id="phoneNumber"
            placeholder="Phone Number"
            type="text"
            element="input"
            onInput={inputHandler}
            errorText="Please enter a more than 10 numbers."
            validators={[VALIDATOR_MINLENGTH(10)]}
          />
        <div className="pay-button">
        {!formState.isValid ?
        <Button inverse    type="submit" disabled={!formState.isValid}>PAY</Button>
        :<PayButton   cartItems={cartItems} />
      }
        
          </div>
      </form>
    </div>

    <div className="cartTotal1">
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
    </div>
  </div>
  </Fragment>

  );
};
export default PaymentForm;
