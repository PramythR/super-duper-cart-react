import React, { useState } from "react";

import "./App.css";
import Product from "./Product";
import Cart from "./Cart";
const PAGE_PRODUCTS = "products";

const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  //page component

  const [page, setPage] = useState("PAGE_PRODUCTS");

  //new function
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  const addToCart = (product) => {
    console.log(`seeee`);
    setCart([...cart, { ...product }]);
  };
  const removeFromCart = (productRemove) => {
    setCart(cart.filter((product) => product !== productRemove));
  };
  // const renderProducts = () => (

  // );

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>

      {page === PAGE_PRODUCTS && <Product addToCart={addToCart} />}
      {page === PAGE_CART && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;
