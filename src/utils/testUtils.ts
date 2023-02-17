import { RootState } from "../store/store";

export const defaultMockState: RootState = {
  cart: {
    cartItems: [],
    isCartOpen: false,
  },
  user: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  categories: {
    categories: [],
    isLoading: false,
    error: null,
  },
};
