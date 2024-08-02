import { Fragment } from "react";
import { VALIDATOR_EMAIL } from "../../../../utils/validators/validators";
import { useForm } from "../../../../utils/hooks/useForm";
import Button from "../../../../component/others/button/button";
import Input from "../../../../component/others/input/input";
import { useNavigate } from "react-router-dom";
import "./addAdmin.scss";

const AddAddmins = () => {
  const navigate = useNavigate();
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addminSubmitHandler = async (event) => {};
  return (
    <Fragment>
      <div className="addAdmins-data">
        <form onSubmit={addminSubmitHandler}>
          <Input
            element="input"
            id="email"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a email"
            onInput={inputHandler}
          />
          <Button inverse type="submit" disabled={!formState.isValid}>
            Save
          </Button>
        </form>
      </div>
    </Fragment>
  );
};
export default AddAddmins;
