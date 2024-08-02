import { createContext ,useState} from 'react';
import { SHOP_DATA } from '../utils/shopData';

export const MealContext=createContext({
 mealMap:{},
 selected:"",
 setSelected:()=>{}
});
export const MealProvider=({children})=>{
   const [mealMap,setMealMap]=useState(SHOP_DATA)
   const [selected,setSelected]=useState("Salad")

   const value={mealMap,selected,setSelected};
  return(
   <MealContext.Provider value={value}>{children}</MealContext.Provider>
  )
}