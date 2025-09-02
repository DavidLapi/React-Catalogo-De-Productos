import './App.css'
import ProductCard from '../components/Products/ProductCard/ProductCard'

function App() {

  return (
    <>
      <h1>Catálogo de productos</h1>
      <div className='catalogo-container'>
        <ProductCard 
          nombre="Cachopo de cecina" 
          altImg="Cachopo"
          dirImg="https://s2.elespanol.com/2024/10/11/cocinillas/recetas/892671033_249926526_1706x960.jpg"
          precio="8" 
          backColorBtn="green"
        />
        <ProductCard 
          nombre="Traje de novio" 
          altImg="Traje de novio"
          dirImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcB28favCapE50J1rhA9SgiFTLEuyNTKQ74g&s"
          precio="58" 
          backColorBtn="blue"
        />
        <ProductCard 
          nombre="Cachopo de ternera asturiana" 
          altImg="Cachopo asturiano"
          dirImg="https://recetasdecocina.elmundo.es/wp-content/uploads/2024/09/cachopo-de-ternera.jpg"
          precio="110" 
          backColorBtn="red"
        />
      </div>
    </>
  )
}

export default App
