import{ useReducer, useEffect } from 'react';

import { validate } from '../../../utils/validators/validators';
import './input.css';
const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};

const Input = props => {
  const[InputState,dispatch]=useReducer(inputReducer,{
    value: props.initialValue ||'',
    isValid: props.initialisValid  || false,
    isTouched: false,
  });
   const{id,onInput}=props;
   const {value,isValid}=InputState
   useEffect(()=>{
    onInput(id,value,isValid)
   },[ onInput,id,value,isValid])
 
   const ChangeHandler=event=>{
  dispatch({
    type:'CHANGE',val:event.target.value,validators: props.validators})
 }
 const touchHandler=()=>{
  dispatch({type:'TOUCH'})
 }

  const element = props.element === 'input' ? (
    
      <input
       className='form-input'
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={ChangeHandler}
        onBlur={touchHandler}
        value={InputState.value}
        disabled={props.disabled}
      />
    ) : (
      <textarea
      className='form-input'
        id={props.id}
        rows={props.rows || 3}
        onChange={ChangeHandler}
        placeholder={props.placeholder}
        onBlur={touchHandler}
        value={InputState.value}
      />
    );

    return (
      <div
        className={`form-control ${!InputState.isValid && InputState.isTouched &&
          'form-control--invalid'}`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!InputState.isValid && InputState.isTouched && <p className='error'>{props.errorText}</p>}
      </div>
    );
};

export default Input;
