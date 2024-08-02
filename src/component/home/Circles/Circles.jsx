import CirclesItem from '../circles.item/circlesitem'
import './Circles.scss'
const Circles=({data})=>{

return (
    <div className='circles'>
    <div className="circles-map">
    {data.map((item)=>(
        <CirclesItem key={item.id} data={item}/>
))}

    </div>
    </div>
)
}
export default Circles;