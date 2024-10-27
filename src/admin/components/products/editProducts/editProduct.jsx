import { useContext, useEffect,Fragment, useState } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import { AuthContext} from '../../../../context/authContext';
import { useForm } from '../../../../utils/hooks/useForm';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../../../utils/validators/validators';
import { useHttpClinet } from '../../../../utils/hooks/httpHook';
import BackDrop from '../../../../component/others/backDrop/backDrop';
import ErrorModal from '../../../../component/others/models/error/errorModel';
import LoadingSpinner from '../../../../component/others/loadingSpinner/loadingSpinner';
import Input from '../../../../component/others/input/input';
import './editProduct.css'
import Button from '../../../../component/others/button/button';
import ImageUploadAuth from '../../../../component/others/imageUpload/imageUpload';
const EditProduct=()=>{
    const navigate=useNavigate()
    const location = useLocation();
    const {token}=useContext(AuthContext)
    const data=location.state;
    const{title,category,details,image,price,id}=data;
    const [editedcategory,setEditedcategory]=useState(category)
    const{isLoading,error,sendRequest,clearError}=useHttpClinet()
    
    const [formState,inputHandler,setFormData]=useForm({
        title:{
            value:"",
            isValid:false
        },
        details:{
            value:"",
            isValid:false
        },
        price:{
            value:"",
            isValid:false
        },
        image:{
            value:"",
            isValid:false
        },
    },false);
    useEffect(()=>{
        setFormData({
         title:{
            value:title,
            isValid:true
         },
         details:{
            value:details,
            isValid:true
         },
         price:{
            value:price,
            isValid:true
         },
         image:{
            value:image,
            isValid:true
         },
            
        },true)
    },[title,category,details,image,price]);
    const CategoryHandler=(event)=>{
        event.preventDefault();
        setEditedcategory(event.target.value)
    } 
    console.log(formState.inputs.image.value)

    const productSubmitHandler = async (event) => {
        event.preventDefault();
        try{
            const formData=new FormData();
            formData.append("title",formState.inputs.title.value)
            formData.append("details",formState.inputs.details.value)
            formData.append("price",formState.inputs.price.value)
            formData.append("image",formState.inputs.image.value)
            formData.append("category",editedcategory);
        await sendRequest(process.env.REACT_APP_BACKEND_URL+`/api/products/${id}`,"PATCH",formData, {
          authorization: "Bearer " + token,
        })      
           }catch(err){}


    };
    return(
        <Fragment>
        {error && <BackDrop />}
        {error && <ErrorModal data={error} onClick={clearError} />}   
          <div className='editProduct-page'>
          <h1>Edit Product</h1>
          {isLoading && <LoadingSpinner asOverlay />}
          <div className='edit-product-data'>
          
          <form onSubmit={productSubmitHandler}>
         <div className='edit-product-data-frist-part'>
          { image &&<div className='imagePreview'>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/${image}`}/>
            </div>}
            <div className="uploadimage">
          <ImageUploadAuth
            center
            id="image"
            onInput={inputHandler}
            /></div>
            </div>
          <div className='edit-product-data-second-part'>
          <Input
          element="input"
          id="title"
          type="text"
          label="Product Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a product Name"
          initialValue={title}
          initialValid={formState.inputs.title.isValid}
          onInput={inputHandler}
        />
        <Input
        id="details"
        type="text"
        rows="3"
        label="Details"
        validators={[VALIDATOR_MINLENGTH(15)]}
        errorText="Please enter more than 15 caracters"
        initialValue={details}
        initialValid={formState.inputs.details.isValid}
        onInput={inputHandler}
      />
      <div className="select">
      <label className="label" for="pet-select">Choose a Categories:</label>
      <select name="Categories" id="categories-select" onChange={CategoryHandler}>
        <option value="">{category}</option>
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
      initialValue={price}
      initialValid={formState.inputs.price.isValid}
      onInput={inputHandler}
    />
    <Button inverse type="submit" disabled={!formState.isValid}>Save</Button>
          </div>

          </form>
          </div>
          </div>
        </Fragment>
    )
    
}
export default EditProduct
