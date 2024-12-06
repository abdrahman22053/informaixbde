import { CartState } from './state/cart/cart.reducer';
import { ProductsState } from './state/products/products.state';

export interface AppState {
  cart: CartState;
}
