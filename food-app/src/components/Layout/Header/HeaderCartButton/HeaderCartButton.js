import { useContext, useEffect, useState } from "react";
import cartContext from "../../../../source/cart-context";
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import { HeaderCartButtonWrapper } from "./styles";

const HeaderCartButton = ({ onClick }) => {
  const { items } = useContext(cartContext);
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    let subscription = true;
    let timer;
    if (subscription) {
      setPlayAnimation(true);
      timer = setTimeout(() => {setPlayAnimation(false)}, 300)
    }
    return () => {
      subscription = false
      clearTimeout(timer)
    }
  }, [items.map(i => i.amount).toString()])

  return (
    <HeaderCartButtonWrapper onClick={onClick} playAnimation={playAnimation}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">
        {items.reduce((current, item) => current + item.amount, 0)}
      </span>
    </HeaderCartButtonWrapper>
  );
};

export default HeaderCartButton;
