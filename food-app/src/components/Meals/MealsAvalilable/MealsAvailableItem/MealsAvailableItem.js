import { useContext, useRef } from "react";
import cartContext from "../../../../source/cart-context";
import MealsAvailableItemForm from "./MealsAvailableItemForm/MealsAvailableItemForm";
import { MealsAvailableItemWrapper } from "./styles"

const MealsAvailableItem = ({ name, description, price, id }) => {
    const {addItem} = useContext(cartContext);
    const inputRef = useRef()

    const addItemHandler = () => {
        addItem({
            id,
            description,
            price,
            name,
            amount: Number(inputRef.current.getValue())
        })
    }
    return (
        <MealsAvailableItemWrapper>
            <div>
                <h3>{name}</h3>
                <div className="description">{description}</div>
                <div className="price">{`$${price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealsAvailableItemForm addItemHandler={addItemHandler} inputRef={inputRef}/>
            </div>
        </MealsAvailableItemWrapper>
    )
}

export default MealsAvailableItem;