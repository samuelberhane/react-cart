import React from "react";
import { useGlobalContext } from "./context";
import Product from "./Product";

const Products = () => {
  const { total, cart, clearCart } = useGlobalContext();
  return (
    <section className="main-section">
      <div className="desc">
        <p>Product</p>
        <p>Name</p>
        <p>Qty</p>
        <p>Price</p>
        <p>Amount</p>
      </div>
      <div className="products">
        {cart.map((item, index) => {
          return <Product {...item} key={index} />;
        })}
      </div>
      <div className="total">
        <h1>Total: ${total.toFixed(2)}</h1>
      </div>
      <div className="clear">
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </section>
  );
};

export default Products;
