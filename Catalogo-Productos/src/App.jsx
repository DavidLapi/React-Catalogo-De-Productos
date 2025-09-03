//Ejercicio  básico completado
/*
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
*/
// Ejercicio extra
import './App.css'
import ProductCard from '../components/Products/ProductCard/ProductCard'

function App() {

  const productos = [
    { id: 1, nombre: "Cachopo de cecina y rulo de cabra", precio: "8", imagen: "https://s2.elespanol.com/2024/10/11/cocinillas/recetas/892671033_249926526_1706x960.jpg", imagenAlt: "Cachopo cecina", colorFondo: "purple"},
    { id: 2, nombre: "Traje de novio", precio: "48", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcB28favCapE50J1rhA9SgiFTLEuyNTKQ74g&s", imagenAlt: "Traje novio", colorFondo: "yellow"},
    { id: 3, nombre: "Cachopo de ternera asturiana", precio: "111", imagen: "https://recetasdecocina.elmundo.es/wp-content/uploads/2024/09/cachopo-de-ternera.jpg", imagenAlt: "Cachopo ternera", colorFondo: "orange"},
    { id: 4, nombre: "Patatas", precio: "4", imagen: "https://bioky.es/wp-content/uploads/2023/12/planta-patata.jpg", imagenAlt: "patatas", colorFondo: "brown"}
  ];

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
      <hr />
      <h1>Catálogo de productos con punto extra</h1>
      <h2>Total productos: {productos.length}</h2>
      <div className='catalogo-container'>
      {productos.map((producto) => (
        <ProductCard 
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          altImg={producto.imagenAlt}
          dirImg={producto.imagen}
          backColorBtn={producto.colorFondo}
          />
      ))}
      </div>
    </>
  )
}

export default App
