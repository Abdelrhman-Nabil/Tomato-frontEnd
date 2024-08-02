import { useNavigate } from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import { useForm } from "../../../../utils/hooks/useForm";
import {VALIDATOR_MINLENGTH,VALIDATOR_REQUIRE,} from "../../../../utils/validators/validators";
import {useHttpClinet} from "../../../../utils/hooks/httpHook"
import { AuthContext } from "../../../../context/authContext";
import Input from "../../../../component/others/input/input";
import Button from "../../../../component/others/button/button";
import ImageUploadAuth from "../../../../component/others/imageUpload/imageUpload";
import "./addProducts.css";
const AddProduct = () => {
    const navigate=useNavigate();
    const{token}=useContext(AuthContext)
    const [category,setCategory]=useState('')
    const {isLoading,error,sendRequest,clearError}=useHttpClinet()

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      details: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      image:{
        value:"",
        isValid:false
      }
    },
    false
  );
  const CategoryHandler=(event)=>{
    event.preventDefault();
    setCategory(event.target.value)
}

  const productSubmitHandler = async (event) => {
    event.preventDefault();
    try{
      const formData=new FormData();
      formData.append("title",formState.inputs.title.value)
      formData.append("details",formState.inputs.details.value)
      formData.append("price",formState.inputs.price.value)
      formData.append("image",formState.inputs.image.value)
      formData.append("category",category);
      await sendRequest('http://localhost:5000/api/products/',"POST",formData) 
    }catch(err){}
     navigate('/AdminPanel/Products')

};

  return (
    <Fragment>
      <div className="addProduct-page">
        <span className="addProduct-page-header">Add Product</span>
        <div className="add-product-data">
            <form onSubmit={productSubmitHandler}>
            <ImageUploadAuth
            center
            id="image"
            onInput={inputHandler}
            />
              <Input
                element="input"
                id="title"
                type="text"
                label="Product Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a product Name"
                onInput={inputHandler}
              />              
              <Input
                id="details"
                type="text"
                rows="0"
                label="Details"
                validators={[VALIDATOR_MINLENGTH(15)]}
                errorText="Please enter a product Details more than 15 caracters"
                onInput={inputHandler}
              />
              <div className="select">
              <label className="label" for="pet-select">Choose a Categories:</label>
              <select name="Categories" id="categories-select" onChange={CategoryHandler}>
                <option value="">--Please choose an option--</option>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cakes" >Cakes</option>
                <option value="Pasta"  >Pasta</option>
                <option value="Burger" >Burger</option>
              </select></div>
              <Input
              element="input"
              id="price"
              type="number"
              label="price"
              validators={[VALIDATOR_MINLENGTH(1)]}
              errorText="Please enter a product Price"
              onInput={inputHandler}
            />
              <Button inverse type="submit" disabled={!formState.isValid}>
                Add
              </Button>
            </form>
          </div>
        </div>
    </Fragment>
  );
};
export default AddProduct;
