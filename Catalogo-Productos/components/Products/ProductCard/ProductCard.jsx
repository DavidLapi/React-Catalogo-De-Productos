import "./ProductCard.css"

function ProductCard(props) {
  return (
    <div className='card-container'>
        <h3 className='card-nombre'>{props.nombre}</h3>
        <img 
            className='card-img' 
            alt='imagen'
            src="https://s2.elespanol.com/2024/10/11/cocinillas/recetas/892671033_249926526_1706x960.jpg" 
        />
        <p className='card-precio'>Precio: 50€</p>
        <p className="card-texto">Producto PREMIUM</p>
    </div>
  )
}

export default ProductCard