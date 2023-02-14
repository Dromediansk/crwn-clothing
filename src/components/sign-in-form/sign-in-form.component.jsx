import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const emptyFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const [formFields, setFormFields] = useState(emptyFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const resetFormFields = () => {
    setFormFields(emptyFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect credentials!");
          break;

        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.log(error.message);
      }
    }
  };

  const handleSignInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label="E-mail"
          text="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit" onClick={handleSignIn}>
            Sign in
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleSignInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
