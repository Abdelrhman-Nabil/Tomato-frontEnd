import { Route,Routes } from 'react-router-dom';
import MealPreview from '../../component/meals/mealPage/mealPage';
import HeaderMeals from '../../component/meals/headerMeals/headerMeals';
import './meals.scss'
const Meals=()=>{
    return(
        <Routes>
            <Route index element={<MealPreview/>} />
            <Route path=':title' element={<HeaderMeals/>} />

        </Routes>
    )
}
export default Meals;
