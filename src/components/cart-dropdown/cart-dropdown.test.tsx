import { render, screen, fireEvent } from "@testing-library/react";
import CartDropdown from "./cart-dropdown.component";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { RootState } from "../../store/store";
import { defaultMockState } from "../../utils/testUtils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockStore = configureStore<RootState>([]);

describe("CartDropdown component", () => {
  it("should render with 'Your cart is empty' text", () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock<() => NavigateFunction>).mockReturnValue(
      navigate
    );
    const store = mockStore(defaultMockState);
    render(
      <Provider store={store}>
        <CartDropdown />
      </Provider>
    );

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("should navigate to /checkout URL when button is clicked", () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock<() => NavigateFunction>).mockReturnValue(
      navigate
    );
    const store = mockStore(defaultMockState);
    render(
      <Provider store={store}>
        <CartDropdown />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("navigate-button"));

    expect(navigate).toHaveBeenCalledWith("/checkout");
  });
});
