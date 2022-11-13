import { useContext, useEffect, useReducer } from "react";
import { data } from "./data";
import React from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const defaultState = {
  cart: data,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increaseAmount,
        decreaseAmount,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
