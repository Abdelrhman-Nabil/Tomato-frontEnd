import ProductCardItem from "../productCarditem/productCardItem"
import "./productCard.scss"

const ProductCard=({data})=>{
    console.log(data)
    return(
        <div className="card">
        {  data && data.map((element)=>(
            <ProductCardItem key={element.id} data={element}/>
           ))} 
        </div>
        )
}
export default ProductCard

/*

          */