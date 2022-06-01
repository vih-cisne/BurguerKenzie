import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import api from "./data/api"


function App() {

  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  const [filteredProducts, setFilteredProducts] = useState(undefined)
  
  const [search, setSearch] = useState('')

  useEffect(() => {
    
    api.get('products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      
  }, []);

  useEffect(() => {

    const keepedProductsCart = localStorage.getItem('productsCart-burguerKenzie')

    keepedProductsCart && setCartProducts(JSON.parse(keepedProductsCart))

  }, [])

  

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} products={products}  setFilteredProducts={setFilteredProducts}/>
      <main>
        <ProductList search={search} filteredProducts={filteredProducts} products={products} cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </main>
    </div>
  );
}

export default App;
