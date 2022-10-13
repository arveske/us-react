import { useState } from "react";

const useFormTextInput = (validator, label , id, errorText) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validator(enteredValue);
  const valueInputIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const valueInputChangeHandler = (event) => setEnteredValue(event.target.value);
  const valueInputBlurHandler = () => setEnteredValueTouched(true);

  const nameInputClasses = valueInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return [
    <div className={nameInputClasses} key={id}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        onChange={valueInputChangeHandler}
        onBlur={valueInputBlurHandler}
        value={enteredValue}
      />
      {valueInputIsInvalid && (
        <p className="error-text">{errorText ?? `${label} must not be empty.`}</p>
      )}
    </div>,
    enteredValue,
    enteredValueIsValid,
    setEnteredValueTouched,
    setEnteredValue,
  ];
};

export default useFormTextInput;