import { CartItemWrapper } from './styles';

const CartItem = ({ price, name, amount, onRemove, onAdd }) => {
  const priceReady = `$${price.toFixed(2)}`;

  return (
    <CartItemWrapper>
      <div>
        <h2>{name}</h2>
        <div className="summary">
          <span className="price">{priceReady}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;
