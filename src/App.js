import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Navbar, Products, Cart } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();

    setCart(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <div styles={{ paddingTop: '50px' }}>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;
