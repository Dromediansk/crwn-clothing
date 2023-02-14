import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutFooterContainer,
  CheckoutHeader,
  EmptyMessage,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { clearAllCartItems } from "../../store/cart/cart.action";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleClearAllCartItems = () => {
    dispatch(clearAllCartItems());
  };

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      <CheckoutFooterContainer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.danger}
          onClick={handleClearAllCartItems}
        >
          Clear cart
        </Button>
        <Total>Total: {cartTotal} €</Total>
      </CheckoutFooterContainer>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
