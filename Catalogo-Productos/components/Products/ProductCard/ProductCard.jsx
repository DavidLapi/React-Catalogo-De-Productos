import "./ProductCard.css"
import ProductButton from "../ProductButton/ProductButton"

function ProductCard(props) {
  return (
    <div className='card-container'>
        <h3 className='card-nombre'>{props.nombre}</h3>
        <img 
            className='card-img' 
            alt={props.altImg}
            src={props.dirImg} 
        />
        <p className='card-precio'>Precio: {props.precio}€</p>
        {props.precio > 10 && <p className="card-premium">Producto premium</p>}
        <ProductButton backColor={props.backColorBtn} nombre={props.nombre} />
    </div>
  )
}

export default ProductCard