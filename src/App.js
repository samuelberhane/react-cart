import { BsCartPlusFill } from "react-icons/bs";
import { useGlobalContext } from "./context";
import Products from "./Products";
import Cleared from "./Cleared";

function App() {
  const { amount, cart } = useGlobalContext();
  return (
    <>
      <main>
        <nav className="header">
          <h1>React Cart Project</h1>
          <h1 className="cart">
            <BsCartPlusFill /> <span className="cart-amount">{amount}</span>
          </h1>
        </nav>

        {cart.length > 0 ? <Products /> : <Cleared />}
      </main>
    </>
  );
}

export default App;
