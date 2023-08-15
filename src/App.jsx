import { useState, useEffect } from 'react';

import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const fetchProducts = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const res = await data.json();

    setProducts(res.products);
  };
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="products">
        <Products products={products} cart={cart} setCart={setCart} />
      </div>
      <div>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
