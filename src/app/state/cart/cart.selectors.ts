import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CartState } from './cart.reducer';

const selectCartState = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  selectCartState,
  (cartState: CartState) => cartState.items
);
