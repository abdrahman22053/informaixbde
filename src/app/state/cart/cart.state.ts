import { createAction } from "@ngrx/store";

export const addToCart = createAction("[Item] add to cart");
export const removeFromCart = createAction("[Item] Remove from cart");