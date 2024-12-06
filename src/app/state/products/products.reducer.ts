import { createReducer, on } from '@ngrx/store';
import { initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductsActions.loadProducts, (state) => ({ ...state, loading: true })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ProductsActions.loadProductsFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
