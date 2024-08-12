import './ViewClientOrders.scss'
const ViewClientOrders=props=>{
     const {products,action,total}=props.data

    return(
        <div className='viewOrder'>
         <div className='frist-part'>
         <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 420 420"><path fill="#FFD43B" d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"/></svg>
         </div>
         <div className='second-part'>
         {products&&products.map((product) => {

             return product.map((item)=>{
            
               return <span> {item.title} * {item.quantity} </span>
            })
          })}
         </div>
         <div className='third-part'>
          <span> items : {products[0].length}</span>
         </div>
         <div className='forth-part'>
         <span>{total} $ </span>
         </div>
         <div className='food-action'>{action}</div>
        </div>
    )
}
export default ViewClientOrders