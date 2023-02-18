import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  emailSignInStart,
  facebookSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, SocialButtonsContainer } from "./sign-in-form.styles";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleSignInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleSignInWithFacebook = () => {
    dispatch(facebookSignInStart());
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignIn}>
        <FormInput
          label="E-mail"
          type="email"
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
        <Button type="submit">Sign in</Button>

        <h3>Or sign in with your account:</h3>
        <SocialButtonsContainer>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleSignInWithGoogle}
          >
            Google
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.facebook}
            onClick={handleSignInWithFacebook}
          >
            Facebook
          </Button>
        </SocialButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
