import { useContext} from "react";
import { CartContext } from "../../context/cartContext";
import Button from "../../component/others/button/button";
import "./paymentForm.scss";
import Input from "../../component/others/input/input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../utils/validators/validators";
import { useForm } from "../../utils/hooks/useForm";
const PaymentForm = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [formState, inputHandler] = useForm(
    {
    fullName:{
      value:"",
      isValid:false
    },
    email:{
      value:"",
      isValid:false
    },
    city:{
      value:"",
      isValid:false
    },
    state:{
      value:"",
      isValid:false,
    }
  },
  false
);
console.log(formState)
  const paySubmitHandler = (event) => {
    event.preventDefault();
     // to send request 
     console.log(formState)
    };
  return (
    <div className="pamentForm">
      <div className="delevery-Information">
        <h2>Delevery-Information</h2>
        <from className="paymentForm" onSubmit={paySubmitHandler}>
          <div className="secondLine">
            <Input
              className="name"
              id="fullName"
              placeholder="FullName"
              type="text"
              element="input"
              onInput={inputHandler}
                      errorText="Please enter a FullName."
              validators={[VALIDATOR_MINLENGTH(10)]}
            />
          </div>
          <div className="secondLine">
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
            id="street"
            placeholder="Street"
            type="text"
            element="input"
            onInput={inputHandler}
            errorText="Please enter a more than 8 Chrachters."
            validators={[VALIDATOR_MINLENGTH(5)]}
          />
          </div>
          <div className="fristLine">
          <Input
            className="name"
            id="city"
            placeholder="City"
            type="text"
            element="input"
            onInput={inputHandler}
            errorText="Please enter a Your City."
            validators={[VALIDATOR_MINLENGTH(5)]}
          />
          <Input
            id="state"
            placeholder="State"
            type="text"
            element="input"
            onInput={inputHandler}
                    errorText="Please enter Your State."
            validators={[VALIDATOR_MINLENGTH(5)]}
          />
        </div>
      <div className="secondLine">
      <Input
        id="phone"
        placeholder="Phone Number"
        type="text"
        element="input"
        onInput={inputHandler}
                errorText="Please enter a more than 10 numbers."
        validators={[VALIDATOR_MINLENGTH(10)]}
      />
    </div>
     <Button
    type ="submit"
    className=" button-container checkOut-button"
    disabled={!formState.isValid}>
    Proceed To Payment
  </Button>
        </from>
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
  );
};
export default PaymentForm;
