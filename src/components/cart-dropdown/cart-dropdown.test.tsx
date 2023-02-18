import { render, screen, fireEvent } from "@testing-library/react";
import CartDropdown from "./cart-dropdown.component";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { RootState } from "../../store/store";
import { defaultMockState } from "../../utils/testUtils";
import { CartItem } from "../../store/cart/cart.types";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockStore = configureStore<RootState>([]);
const stubbedCartItem: CartItem = {
  id: 1,
  imageUrl: "some-image-url",
  name: "cart-item-1",
  price: 1,
  quantity: 1,
};

describe("CartDropdown component", () => {
  it("should render empty cart when there are no cart items", () => {
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
    expect(screen.getByTestId("navigate-button")).toBeDisabled();
  });

  it("should navigate to /checkout URL when button is clicked", () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock<() => NavigateFunction>).mockReturnValue(
      navigate
    );
    const store = mockStore({
      ...defaultMockState,
      cart: {
        ...defaultMockState.cart,
        cartItems: [stubbedCartItem],
      },
    });
    render(
      <Provider store={store}>
        <CartDropdown />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("navigate-button"));

    expect(navigate).toHaveBeenCalledWith("/checkout");
  });
});
