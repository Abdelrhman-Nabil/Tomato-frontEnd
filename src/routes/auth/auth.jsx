import { useForm } from "../../utils/hooks/useForm";
import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../component/others/input/input";
import Button from "../../component/others/button/button";
import LoadingSpinner from "../../component/others/loadingSpinner/loadingSpinner"
import { useHttpClinet } from "../../utils/hooks/httpHook";
import BackDrop from "../../component/others/backDrop/backDrop";
import ErrorModal from "../../component/others/models/error/errorModel"
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../utils/validators/validators";
import "./auth.scss";
import { AuthContext } from "../../context/authContext";

const Auth = () => {
  const navigate=useNavigate()
  const {logIn,setAuthIsOpen}=useContext(AuthContext)

  const [isLoginMode, setIsLoginMode] = useState(true);
  const {isLoading,error,sendRequest,clearError}=useHttpClinet()

  const [formState, inputHandler,setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const switchModeHandler=()=>{
    if(!isLoginMode){
      setFormData({
       ...formState.inputs,
       name:undefined,
       address: undefined,
 
      },
      formState.inputs.email.isValid && formState.inputs.password.isValid
      )
 
    }
     else{
     setFormData({
       ...formState.inputs,
       name:{
         value:'',
         isValid:false
       },
       address:{
         value:'',
         isValid:false
       },
     },
      false
     )
    }
    setIsLoginMode(prevMode=>!prevMode)
   }
  const authSubmitHandler=async(event)=>{
    event.preventDefault();
    
    if(isLoginMode){
    const responseData=await sendRequest( 'http://localhost:5000/api/users/logIn',"POST",JSON.stringify({
      email:formState.inputs.email.value,
      password:formState.inputs.password.value,
     }),
   {'Content-Type':"application/json"}
   ) 
     console.log(responseData);
     logIn(responseData.userId,responseData.token)
     {responseData.addmin===true ?navigate('/AdminPanel/DashBoard'):navigate('/')}
    }else{
      try{
      const responseData=await sendRequest( 'http://localhost:5000/api/users/signUp',"POST",JSON.stringify({
        email:formState.inputs.email.value,
        name:formState.inputs.name.value,
        password:formState.inputs.password.value,
        address:formState.inputs.address.value,
       }),
     {'Content-Type':"application/json"}
     )  
     console.log(responseData);
     logIn(responseData.userId,responseData.token)
     navigate('/')

   
      }catch(err){}

      
    }
    // if(formState.inputs.email.value === "aen_2012@live.com"){
    //   logIn()
    //   navigate('/AdminPanel/DashBoard')

    // }else{
    //   logIn()
    //   navigate('/')

    // } 
  }
    return (
      <Fragment>
      {error && <BackDrop />}
      {error && <ErrorModal data={error} onClick={clearError} />}

      {isLoading && <LoadingSpinner asOverlay />}

        <div className="auth-page">
          <div className='auth'>
            <form className="form" onSubmit={authSubmitHandler}>
              {isLoginMode ? (
                <span className="header">Login</span>
              ) : (
                <span className="header">Signup</span>
              )}
              {!isLoginMode && (
                <Input
                  id="name"
                  label="Name"
                  type="text"
                  element="input"
                  onInput={inputHandler}
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  errorText="please enter valid name (at least more than 5 chracters)"
                />
              )}
              <Input
                id="email"
                label="Email"
                type="text"
                element="input"
                placeholder="@google.com"
                onInput={inputHandler}
                validators={[VALIDATOR_EMAIL()]}
                errorText="please enter valid Email"
              />
              <Input
                element="input"
                id="password"
                type="password"
                label="Password"
                validators={[VALIDATOR_MINLENGTH(10)]}
                errorText="Please enter a password more than 10 chracters."
                onInput={inputHandler}
              />
              {!isLoginMode && (
                <Input
                  id="address"
                  label="Address"
                  type="text"
                  element="input"
                  onInput={inputHandler}
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  errorText="please enter valid address (at least more than 5 chracters)"
                />
              )}
              <div className="buttons-container">
                <Button type="submit" disabled={!formState.isValid}>
                  {isLoginMode ? "Sign In" : "Create an account"}
                </Button>
              </div>
            </form>
            <div className="switchButton">
              {isLoginMode ? (
                <text>
                  Don't have an account?
                  <span onClick={switchModeHandler}>Register</span>
                </text>
              ) : (
                <text>
               have an account?<span onClick={switchModeHandler}> Sign in</span>
                </text>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
};
export default Auth;
