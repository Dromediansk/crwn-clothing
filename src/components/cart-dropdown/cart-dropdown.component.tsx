import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(!isCartOpen));
  };

  const isCartEmpty = cartItems.length === 0;

  return (
    <CartDropdownContainer>
      <CartItems>
        {isCartEmpty ? (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        )}
      </CartItems>
      <Button
        disabled={isCartEmpty}
        data-testid="navigate-button"
        onClick={goToCheckoutHandler}
      >
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
