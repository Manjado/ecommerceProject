import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGEL_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFormCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FORM_CART,
  payload: item,
});
