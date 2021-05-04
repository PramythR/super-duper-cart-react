import React, { useState } from "react";

export default function Product({ addToCart }) {
  const [products] = useState([
    {
      name: "AA battery",
      cost: "$2.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9i4Vl2l_FWZetpyLua8H3TIN3LOnZSclpw&usqp=CAU",
    },
    {
      name: "Blanket",
      cost: "$19.99",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71LZCFRQs0L._AC_SX466_.jpg",
    },
  ]);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
