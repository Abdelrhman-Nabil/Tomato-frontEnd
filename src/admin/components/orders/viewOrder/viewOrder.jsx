import './viewOrder.scss'
const ViewOrders=(data)=>{
    console.log(data)
    const CategoryHandler=(event)=>{
        console.log(event.target.value)
    }
return(
    <div className='viewOrder'>
     <div className='frist-part'>
     <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 420 420"><path fill="#FFD43B" d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"/></svg>
     </div>
     <div className='second-part'>
     <span>{data.data.title} * {data.data.quaitity}</span>
     <span>{data.data.name}</span>
     <span>{data.data.address}</span>
     <span>{data.data.phoneNumber}</span>
     </div>
     <div className='third-part'>
     <span> items : {data.data.quaitity}</span>
     </div>
     <div className='forth-part'>
     <span>{data.data.total} $ </span>
     </div>
     <div className='fifth-part'>
     <div className="select">
     <select name="Categories" id="categories-select" onChange={CategoryHandler}>
       <option value="">Delivered</option>
       <option value="Salad">Food processing</option>
       <option value="Rolls">Out for Delivery</option>
       
     </select></div>
     </div>
    </div>
)
}
export default ViewOrders