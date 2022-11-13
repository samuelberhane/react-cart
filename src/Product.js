import { useGlobalContext } from "./context";

const Product = ({ id, amount, name, image, price }) => {
  let itemPrice = (amount * price).toFixed(2);
  const { increaseAmount, decreaseAmount, removeItem } = useGlobalContext();
  return (
    <div className="items-content">
      <div className="img-container">
        <img className="product-img" src={image} alt={name} />
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <p className="product-name">{name}</p>
      <div className="quantity">
        <div className="qty-container">
          <button className="btn" onClick={() => decreaseAmount(id)}>
            -
          </button>
          <p className="input">{amount}</p>
          <button className="btn" onClick={() => increaseAmount(id)}>
            +
          </button>
        </div>
      </div>
      <p className="price">${price}</p>
      <p className="amount">${itemPrice}</p>
    </div>
  );
};

export default Product;
