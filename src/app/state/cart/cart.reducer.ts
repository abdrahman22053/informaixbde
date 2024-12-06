import { createReducer, on } from '@ngrx/store';
import { addProductToCart, removeProductFromCart, clearCart } from './cart.actions';

export interface CartState {
  items: any[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addProductToCart, (state, { product }) => {
    const existingProduct = state.items.find((item) => item.title === product.title);
    if (existingProduct) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + product.quantity, total: item.total + product.total }
            : item
        ),
      };
    } else {
      return { ...state, items: [...state.items, product] };
    }
  }),
  on(removeProductFromCart, (state, { product }) => ({
    ...state,
    items: state.items.filter((item) => item.title !== product.title),
  })),
  on(clearCart, () => initialState)
);
