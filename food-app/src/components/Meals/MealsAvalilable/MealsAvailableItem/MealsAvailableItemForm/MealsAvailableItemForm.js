import React from "react";
import UIInput from "../../../../UI/UIInput/UIInput";
import { MealsAvailableItemFormWrapper } from "./styles";

const MealsAvailableItemForm = ({addItemHandler, inputRef}) => {

    const formHandler = (e) => {
        e.preventDefault()
    }


    return (<MealsAvailableItemFormWrapper onSubmit={formHandler}>
        <UIInput label="Amount" 
        ref={inputRef}
        input={{
            id: Math.random().toString(),
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button onClick={addItemHandler}>
            + Add
        </button>
    </MealsAvailableItemFormWrapper>)
}

export default MealsAvailableItemForm;