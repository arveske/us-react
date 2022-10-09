import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const calculateTotalAmount = (items) =>
    items.reduce((curr, item) => curr + item.price * item.amount, 0).toFixed(2);
  if (action.type === "ADD-ITEM") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (itemIndex >= 0) {
      state.items[itemIndex].amount += action.item.amount;
    } else {
      state.items.unshift(action.item);
    }
    return {
      ...state,
      totalAmount: calculateTotalAmount(state.items),
    };
  }
  if (action.type === "REMOVE-ITEM") {
    const itemRemoveIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    if (itemRemoveIndex >= 0) {
      if (state.items[itemRemoveIndex].amount > 1) {
        state.items[itemRemoveIndex].amount -= 1;
      } else {
        state.items.splice(itemRemoveIndex, 1);
      }
    }
    return {
      ...state,
      totalAmount: calculateTotalAmount(state.items),
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD-ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE-ITEM", id: id });
  };

  const cartContext = {
    ...cartState,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
