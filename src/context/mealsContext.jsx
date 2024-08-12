import { createContext ,useEffect,useState} from 'react';
import { SHOP_DATA } from '../utils/shopData';
import { useHttpClinet } from '../utils/hooks/httpHook';

export const MealContext=createContext({
 mealMap:{},
 selected:"",
 setSelected:()=>{},  
 setMealMap:()=>{}
});
export const MealProvider=({children})=>{
   const [mealMap,setMealMap]=useState()
   const [selected,setSelected]=useState("Salad")
   const value={mealMap,selected,setSelected,setMealMap};
  return(
   <MealContext.Provider value={value}>{children}</MealContext.Provider>
  )
}