import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";


function App() {

  const [products, setProducts] = useState([])


  useEffect(() => {
    
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((res) => res.json())
    .then((res) => setProducts(res))
    .catch((error) => console.log(error))
    
  }, [])

  return (
    <div className="App">
      <Header />
      <ProductList products={products}/>
    </div>
  );
}

export default App;
