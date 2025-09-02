import './App.css'
import ProductCard from '../components/Products/ProductCard/ProductCard'
import ProductButton from '../components/Products/ProductButton/ProductButton'

function App() {

  return (
    <>
      <h1>Catálogo de productos</h1>
      <div className='catalogo-container'>
        <ProductCard nombre="Cachopo de cecina" />
        <ProductButton />
      </div>
    </>
  )
}

export default App
