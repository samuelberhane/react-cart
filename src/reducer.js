const reducer = (state, { type, payload }) => {
  switch (type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      const filteredItem = state.cart.filter((item) => item.id !== payload);
      return { ...state, cart: filteredItem };
    case "INCREASE":
      const itemIncreased = state.cart.map((item) => {
        if (item.id === payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: itemIncreased };
    case "DECREASE":
      const itemDecreased = state.cart
        .map((item) => {
          if (item.id === payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: itemDecreased };
    case "UPDATE_TOTAL":
      const { amount, total } = state.cart.reduce(
        (totalItem, currentItem) => {
          const { amount, price } = currentItem;
          totalItem.amount += amount;
          const currentTotal = amount * price;
          totalItem.total += currentTotal;
          return totalItem;
        },
        { amount: 0, total: 0 }
      );
      return { ...state, amount, total };
    default:
      break;
  }
};

export default reducer;
