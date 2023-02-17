import { render, screen } from "@testing-library/react";
import Button from "./button.component";

it("should render default button", () => {
  render(<Button>Testing button</Button>);

  const button = screen.getByTestId("custom-button");

  expect(button).toMatchSnapshot();
});

it("should show spinner when loading", () => {
  render(<Button isLoading>Testing button</Button>);

  const button = screen.getByTestId("custom-button");
  const buttonSpinner = screen.getByTestId("button-spinner");

  expect(button).toBeDisabled();
  expect(button).toHaveTextContent("");
  expect(buttonSpinner).toBeInTheDocument();
});
