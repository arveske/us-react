import { useContext } from "react";
import UIModal from "../UI/UIModal/UIModal";
import { CartWrapper } from "./styles";
import cartContext from "../../source/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = ({ onClose }) => {
  const { totalAmount, items, addItem, removeItem } = useContext(cartContext);

  return (
    <UIModal onClose={onClose}>
      <CartWrapper>
        <ul className="cart-items">
          {items.map((cartItem) => (
            <CartItem
              {...cartItem}
              onAdd={() => addItem({ ...cartItem, amount: 1 })}
              onRemove={() => removeItem(cartItem.id)}
            />
          ))}
        </ul>
        <div className="total">
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={onClose}>
            Close
          </button>
          {totalAmount && <button className="button">Order</button>}
        </div>
      </CartWrapper>
    </UIModal>
  );
};

export default Cart;
