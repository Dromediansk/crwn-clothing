import { FC, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  ButtonSpinner,
  DangerButton,
  FacebookSignInButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google",
  facebook = "facebook",
  inverted = "inverted",
  danger = "danger",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.facebook]: FacebookSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.danger]: DangerButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...props
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton data-testid="custom-button" disabled={isLoading} {...props}>
      {isLoading ? <ButtonSpinner data-testid="button-spinner" /> : children}
    </CustomButton>
  );
};

export default Button;
