import { createAction, props } from '@ngrx/store';

export const addProductToCart = createAction(
  '[Cart] Add Product',
  props<{ product: any }>()
);

export const removeProductFromCart = createAction(
  '[Cart] Remove Product',
  props<{ product: any }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
