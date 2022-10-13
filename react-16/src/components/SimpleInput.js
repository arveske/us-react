import { useCallback } from "react";
import useFormTextInput from "../hooks/useFormTextInput";

const SimpleInput = (props) => {
  const nameValidator = useCallback((name) => name.trim() !== "", []);
  const [
    nameInput,
    nameInputValue,
    isNameInputValid,
    setEnteredNameTouched,
    setEnteredName,
  ] = useFormTextInput(
    nameValidator,
    "Your Name",
    "name",
    "Name must not be empty."
  );

  const emailValidator = useCallback(
    (email) =>
      email.trim() !== "" && email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
    []
  );
  const [
    emailInput,
    emailInputValue,
    isEmailInputValid,
    setEnteredEmailTouched,
    setEnteredEmail,
  ] = useFormTextInput(
    emailValidator,
    "Your Email",
    "email",
    "Email must be correct."
  );

  let formIsValid = false;

  if (isNameInputValid && isEmailInputValid) formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!isNameInputValid || !isEmailInputValid) {
      return;
    }

    console.log(nameInputValue, emailInputValue);

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      {[nameInput, emailInput]}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
