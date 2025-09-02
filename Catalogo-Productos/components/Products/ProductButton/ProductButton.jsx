import "./ProductButton.css"

function ProductButton(props) {
  return (
    <div className="btn-container">
        <button className="btn-carrito" style={{backgroundColor: props.backColor}}>Añadir al carrito</button>
    </div>
  )
}

export default ProductButton
