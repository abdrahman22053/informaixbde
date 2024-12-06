export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  export interface ProductsState {
    products: Product[];
    loading: boolean;
  }
  
  export const initialProductsState: ProductsState = {
    products: [],
    loading: false,
  };
  