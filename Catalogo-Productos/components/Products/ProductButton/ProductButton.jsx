import "./ProductButton.css"

function onClick(texto) {
  console.log("Añadiste "+texto+" al carrito");
}

function ProductButton(props) {
  return (
    <div className="btn-container">
        <button 
          className="btn-carrito" 
          style={{backgroundColor: props.backColor}}
          onClick={() => onClick(props.nombre)}
          >Añadir al carrito</button>
    </div>
  )
}

export default ProductButton
