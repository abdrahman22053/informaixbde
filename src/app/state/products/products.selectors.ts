import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';

export const selectProductsState = (state: AppState) => state.products;

export const selectAllProducts = createSelector(
  selectProductsState,
  (state) => state.products
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state) => state.loading
);
